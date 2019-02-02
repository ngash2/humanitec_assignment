export interface Program {
  url?: string;
  id?: number;
  status?: string;
  budget?: number;
  actuals?: number;
  difference?: number;
  level1_uuid?: string;
  name: string;
  funding_status?: string;
  cost_center?: string;
  description?: string;
  public_dashboard?: boolean;
  start_date?: string;
  end_date?: string;
  create_date?: string;
  edit_date?: string;
  sort?: any;
  organization?: string;
  porfolio?: any;
  fund_code?: any[];
  award?: any[];
  sector?: any[];
  sub_sector?: any[];
  country?: any[];
  milestone?: any[];
  user_access?: any[];
}

export declare type Programs = Program[];
