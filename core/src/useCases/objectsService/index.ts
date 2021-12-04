import ObjectRepository from '../../repository/database/object';
class ObjectsService {
  getList = async () => {
    const { value, error } = await ObjectRepository.getList();
    if (error) return { error: error };
    return { value: value };
  };
  createObject = async (
    img: string,
    name: string,
    country: string,
    text: string,
    rate: number
  ) => {
    const { value, error } = await ObjectRepository.createObject(
      img,
      name,
      country,
      text,
      rate
    );
    if (error) return { error: error };
    return { value: value };
  };
  // deleteUser = async (id: string) => {
  //   const { value, error } = await UsersRepository.deleteUser(id);
  //   if (error) return { error: error };
  //   return { value: value };
  // };

  // editUser = async (id: string, firstName: string, lastName: string) => {
  //   const { value, error } = await UsersRepository.editUser(
  //     id,
  //     firstName,
  //     lastName
  //   );
  //   if (error) return { error: error };
  //   return { value: value };
  // };
  // getUser = async (id: string) => {
  //   const { value, error } = await UsersRepository.getUser(id);
  //   if (error) return { error: error };
  //   return { value: value };
  // };
}
export default new ObjectsService();
