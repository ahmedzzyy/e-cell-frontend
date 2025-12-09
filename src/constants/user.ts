export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  college?: string;
  expectedGraduationYear?: number;
  studentCollegeID?: string;
  emailVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
