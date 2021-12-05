import { v4 as uuidv4 } from 'uuid';
import { ObjectItem } from '../../models/dbm/object';
import { IObjectsRepository } from './interfaces';
import DBConnector from './connector';

class ObjectRepository implements IObjectsRepository {
  getList = async () => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .find();
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getObject = async (id: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .findOne({ where: { id } });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  createObject = async (
    img: string,
    name: string,
    country: string,
    text: string,
    rate: number
  ) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .save({ img, name, country, text, rate });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  deleteObject = async (id: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .delete(id);
      return { value: !!response.affected };
    } catch (e) {
      return { error: e };
    }
  };
  editObject = async (id: string, rate: number) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .update(id, { rate });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getObjectByName = async (name: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .findOne({ where: { name } });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getObjectsByQuery = async () => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .find();
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  }
  // getUser = async (id: string) => {
  //   try {
  //     const response = await DBConnector.connector?.getRepository(User);
  //     //.find(id)
  //     return { value: response };
  //   } catch (e) {
  //     return { error: e };
  //   }
  // };
  // getUserByFirstName = async (firstName: string) => {
  //   try {
  //     const response = await DBConnector.connector
  //       ?.getRepository(User)
  //       .findOne({ where: { firstName } });
  //     return { value: response };
  //   } catch (e) {
  //     return { error: e };
  //   }
  // };
  // editUser = async (id: string, firstName: string, lastName: string) => {
  //   try {
  //     const response = await DBConnector.connector
  //       ?.getRepository(User)
  //       .update(id, { firstName, lastName });
  //     return { value: response };
  //   } catch (e) {
  //     return { error: e };
  //   }
  // };

  // deleteUser = async (id: string) => {
  //   try {
  //     const response = await DBConnector.connector
  //       ?.getRepository(User)
  //       .delete(id);
  //     return { value: !!response.affected };
  //   } catch (e) {
  //     return { error: e };
  //   }
  // };
}
export default new ObjectRepository();
