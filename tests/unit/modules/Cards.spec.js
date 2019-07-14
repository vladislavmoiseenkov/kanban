import { api } from '../../../src/services/api';
import { getCards, addCard, removeCard, updateCard } from '../../../src/modules/Cards';

describe('Cards module', () => {
  describe('getCards', () => {
    it('should call api.get and return correct data', async () => {
      const data = {
        tasks: [
          {
            id: 1,
            name: 'To do',
          },
        ],
      };

      api.get = jest.fn(() => Promise.resolve({ data }));

      const result = await getCards();

      expect(api.get).toHaveBeenCalled();
      expect(result).toEqual(data.tasks);
    });
  });

  describe('addCard', () => {
    it('should call api.post and return correct data', async () => {
      const name = 'Task';
      const columnId = 'columnId';
      const data = {
        task: {
          name,
          columnId,
          _id: '_id',
        }
      };

      api.post = jest.fn(() => Promise.resolve({ data, message: 'Task created', }));
      const result = await addCard(name, columnId);

      expect(api.post).toHaveBeenCalledWith('/task', { name, columnId });
      expect(result).toEqual(data.task);
    });
  });

  describe('removeCard', () => {
    it('should call api.delete', async () => {
      const id = 'id';
      const message = 'OK';
      const data = {
        message
      };

      api.delete = jest.fn(() => Promise.resolve({ data }));

      const result = await removeCard(id);

      expect(api.delete).toHaveBeenCalledWith(`/task/${id}`);
      expect(result.message).toEqual(message);
    });
  });

  describe('updateCard', () => {
    it('should call api.patch and return correct data', async () => {
      const name = 'new name';
      const id = 'id';
      const data = {
        name,
        columnId: 'columnId',
        _id: id,
      };

      api.patch = jest.fn(() => Promise.resolve({ data }));

      const result = await updateCard(id, name);

      expect(api.patch).toHaveBeenCalledWith(`/task/${id}`, { name });
      expect(result).toEqual(data);
    });
  });
});
