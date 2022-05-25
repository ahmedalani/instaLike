import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';
// dummy data
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

import {IUser} from '../../types/models';

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;
interface ICustomInput {
  label: string;
  name: IEditableUserField;
  control: Control<IEditableUser, object>;
  rules?: object;
  multiline?: boolean;
}
const CustomInput = ({label, multiline = false, control, name, rules = {}}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              placeholder="Hello"
              style={[styles.input, {borderColor: error ? colors.error : colors.border}]}
              multiline={multiline}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && <Text style={{color: colors.error}}>{error.message || 'Error'}</Text>}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('submit!', data);
  };
  console.log('useForm hook errors: ', errors);
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>
      {/* form */}
      <CustomInput label="Name" name="name" control={control} rules={{required: 'name is required'}} />
      <CustomInput
        label="Username"
        name="username"
        control={control}
        rules={{required: 'username is required', minLength: {value: 3, message: 'username too short'}}}
      />
      <CustomInput
        label="Website"
        name="website"
        control={control}
        rules={{required: 'website is required', pattern: {value: URL_REGEX, message: 'invalid URL'}}}
      />
      <CustomInput
        label="Bio"
        name="bio"
        control={control}
        rules={{required: 'bio is required', maxLength: {value: 200, message: 'bio too long. can not exceed 50 charachers'}}}
        multiline
      />

      <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>
        Submit
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    borderColor: colors.border,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
export default EditProfileScreen;
