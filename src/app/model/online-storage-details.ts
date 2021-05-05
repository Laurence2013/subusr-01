export interface OnlineStorageDetails {
  name: string;
  desc: {
    audience?: string;
    details?: [];
    info?: string;
    monthly?: string;
    plan_name?: string;
    user_plan: {
      storage: {storage: string}, 
        user_type: {user_type: string}
    };
    yearly_price?: string;
  }
}

export interface OnlineStorageApps {
  app: string;
}
