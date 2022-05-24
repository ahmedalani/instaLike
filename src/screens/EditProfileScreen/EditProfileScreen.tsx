import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';
// dummy data
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

import {IUser} from '../../types/models';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;
interface ICustomInput {
  label: string;
  name: IEditableUserField;
  control: Control<IEditableUser, object>;
  multiline?: boolean;
}
const CustomInput = ({label, multiline = false, control, name}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    render={({field: {onChange, value, onBlur}}) => (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput placeholder="Hello" style={styles.input} multiline={multiline} value={value} onChangeText={onChange} onBlur={onBlur} />
      </View>
    )}
  />
);

const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm<IEditableUser>();

  const onSubmit = (data: IEditableUser) => {
    console.log('submit!', data);
  };
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>
      {/* form */}
      <CustomInput label="Name" name="name" control={control} />
      <CustomInput label="Username" name="username" control={control} />
      <CustomInput label="Website" name="website" control={control} />
      <CustomInput label="Bio" name="bio" control={control} multiline />

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
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
export default EditProfileScreen;
