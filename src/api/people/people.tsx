import axios from 'axios';

import { ApiResponse } from './types';
const baseUrl = process.env.API_BASE_URL;

export const fetchAllPeople = async (): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${process.env.API_BASE_URL}/people`);
  return response.data;
};

export const fetchPeopleById = async (personId: string): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${process.env.API_BASE_URL}/people/${personId}`);
  return response.data;
};