export interface User {
  id: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  birthDate?: string;
  phoneNumber?: string;
  about?: string;
  isActive?: boolean;
  address?: string;
  picture?: string;
  friends?: Friend[];
}

export interface Friend {
  id: number;
  name: string;
}

export interface Name {
  first: string;
  last: string;
}
export interface EditDeleteButtonClick {
  deleteClick: (user: User) => void;
  editClick: (user: User) => void;
}

export interface UserInterface {
  user: User;
}

export interface UsersInterface {
  users: User[];
}

export type UserFormButtonType = 'add' | 'edit';
