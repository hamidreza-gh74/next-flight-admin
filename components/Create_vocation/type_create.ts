export type type_create = {
  start: string;
  end: string;
  start_time: string;
  end_time: string;
  capacity: number;
  price: number;
  list: type_list[];
};

export interface type_list {
  name: string;
  family: string;
  code_meli: number;
  birthDate: string;
}

export type type_new_trip = {
  id: string;
  start: string;
  end: string;
  start_time: string;
  end_time: string;
  capacity: number;
  price: number;
  list: type_list[];
};
