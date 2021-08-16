export interface IDefaultInputProps {
  placeholder?: string;
  input: any;
  value?: string;
  label?: string;
  disabled?: boolean;
  id?: string;
  renderHidePass?(): JSX.Element;
}

export interface IUserResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    linkedinLink: string | null;
    isReceivingNotifications: boolean;
    avatarKey: null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
  };
}

export type LoadingStatus = "idle" | "pending" | "fulfilled" | "rejected";
