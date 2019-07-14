import { api } from '../../../src/services/api';
import { getColumns } from '../../../src/modules/Columns';

describe('Column module', () => {
  describe('getColumns', () => {
    it('should call api.get and return correct data', async () => {
      const data = {
        columns: [
          {
            name: 'To Do',
            _id: '5ce9c5f978a6f20c1545fb53',
          },
        ],
      };

      api.get = jest.fn(() => Promise.resolve({ data }));

      const result = await getColumns();

      expect(api.get).toHaveBeenCalled();
      expect(result).toEqual(data.columns);
    });
  });
});
