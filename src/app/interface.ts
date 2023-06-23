import * as e from 'cors';

export interface userResponse {
  data: {
    user: userData;
  };
}

export interface userData {
  _id: string;
  email: string;
  photo: string;
  role: string;
  __v?: 0;
}

export interface instrumentResponse {
  data: {
    instrument: instrumentData[];
  };
}

export interface instrumentData {
  serialNo: string;
  make: string;
  model: string;
  calibrator: string;
  calibrationDueDate: string;
  assignedTo: string;
  secondPerson: string;
}

export interface pendingApprovalResponse {
  data: {
    instrument: pendingApprovalData[];
  };
}

export interface pendingApprovalData {
  serialNo: string;
  make: string;
  model: string;
  calibrator: string;
  certificate: string;
  approve: string;
}

export interface calibrationAssignedResponse {
  data: {
    instrument: calibrationAssignedData[];
  };
}

export interface calibrationAssignedData {
  serialNo: string;
  make: string;
  model: string;
  calibrationDueDate: string;
  status: string;
}

export interface groupResponse {
  data: {
    group: groupData[];
  };
}

export interface groupData {
  groupName: string;
  startOfAvailability: string;
  endOfAvailability: string;
}

export interface teamResponse {
  data: {
    team: teamData[];
  };
}

export interface teamData {
  teamName: string;
  teamAroundTime: string;
}
