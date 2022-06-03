export interface Member {
    _id: number;
    name: string;
    qualifiers: [string];
}

export interface NewMember {
  name: string;
  qualifiers: string[] | [];
}

export interface ErrorMessage {
  nameError: string;
  qualifierError: string;
}