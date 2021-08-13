export interface IDefaultInputProps {
  placeholder?: string;
  input: any;
  value?: string;
  label?: string;
  disabled?: boolean;
  id?: string;
  renderHidePass?(): JSX.Element;
}
