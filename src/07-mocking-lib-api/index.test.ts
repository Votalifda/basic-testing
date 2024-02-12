// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const relativePath = '/posts/1';
    const getDataSpy = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi(relativePath);
    expect(getDataSpy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const relativePath = '/posts';
    const getSpy = jest.spyOn(axios, 'get');
    await throttledGetDataFromApi(relativePath);
    expect(getSpy).toEqual(expect.anything());
  });


  test('should return response data', async () => {
    const relativePath = '/posts/1';
    const responseData = await throttledGetDataFromApi(relativePath);
    expect(responseData).toEqual(expect.anything());
  });
});
