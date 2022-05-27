import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Camera, CameraPictureOptions, CameraRecordingOptions, CameraType, FlashMode, VideoQuality} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';

const flashModes = [FlashMode.off, FlashMode.on, FlashMode.auto, FlashMode.torch];
const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const camera = useRef<Camera>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonPermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(cameraPermission.status === 'granted' && microphonPermission.status === 'granted');
    };
    getPermission();
  }, []);

  const flipFlash = () => {
    const currentFlashIndex = flashModes.indexOf(flash);
    const nextFlashIndex = currentFlashIndex === flashModes.length - 1 ? 0 : currentFlashIndex + 1;
    setFlash(flashModes[nextFlashIndex]);
  };
  const takePicture = async () => {
    if (!isCameraReady || !camera.current) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.5, // 0 compress for small size, 1 means compress for maximum quality
      base64: false, // Whether to also include the image data in Base64 format
      skipProcessing: true, // on android, thee 'processing' step messes the oreintation of image
    };
    const result = await camera.current.takePictureAsync(options);
    console.log(result);
  };
  const startRecording = async () => {
    console.log('start recording...');
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: VideoQuality['480p'],
      maxDuration: 10,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
      console.log(result);
    } catch (err) {
      console.log('recording err', err);
    }
    setIsRecording(false);
  };
  const stopRecording = () => {
    console.log('stop recording.');
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  const flipCamera = () => {
    setCameraType(currType => (currType === CameraType.back ? CameraType.front : CameraType.back));
  };

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }
  if (hasPermissions === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.page}>
      <Camera style={styles.camera} ref={camera} type={cameraType} flashMode={flash} onCameraReady={() => setIsCameraReady(true)} />
      <View style={[styles.buttonContainer, {top: 25}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons name={flashModeToIcon[flash]} size={30} color={colors.white} />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        {isCameraReady && (
          <Pressable onPress={takePicture} onLongPress={startRecording} onPressOut={stopRecording}>
            <View style={[styles.circle, {backgroundColor: isRecording ? colors.accent : colors.white}]} />
          </Pressable>
        )}
        <Pressable onPress={flipCamera}>
          <MaterialIcons name="flip-camera-ios" size={30} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
});
export default PostUploadScreen;
