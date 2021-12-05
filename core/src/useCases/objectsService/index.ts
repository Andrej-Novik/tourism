import ObjectRepository from '../../repository/database/object';
class ObjectsService {
  getList = async () => {
    const { value, error } = await ObjectRepository.getList();
    if (error) return { error: error };
    return { value: value };
  };
  // getUser = async (id: string) => {
  //   const { value, error } = await UsersRepository.getUser(id);
  //   if (error) return { error: error };
  //   return { value: value };
  // };
  getObject = async (id: string) => {
    const { value, error } = await ObjectRepository.getObject(id);
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
  deleteObject = async (id: string) => {
    const { value, error } = await ObjectRepository.deleteObject(id);
    if (error) return { error: error };
    return { value: value };
  };
  editObject = async (id: string, rate: number) => {
    const { value, error } = await ObjectRepository.editObject(
      id,
      rate
    );
    if (error) return { error: error };
    return { value: value };
  };
  getObjectByName = async (name: string) => {
    const { value, error } = await ObjectRepository.getObjectByName(
      name
    );
    if (error) return { error: error };
    return { value: value };
  };
  getObjectsByQuery = async () => {
    const { value, error } = await ObjectRepository.getObjectsByQuery();
    if (error) return { error: error };
    return { value: value };
  }
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
