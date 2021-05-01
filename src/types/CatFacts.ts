interface FactStatus {
  feedback?: string;
  sentCount: number;
  verified: boolean;
}

export interface Fact {
  __v: number;
  _id: string;
  createdAt: string;
  deleted: boolean;
  status: FactStatus;
  text: string;
  type: string;
  updatedAt: string;
  used: boolean;
  user: string;
}
