export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    is_verified: boolean;
  }
  
  export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    due_date: Date;
    user_id: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface ApiResponse<T> {
    status: boolean;
    message: string;
    data: T;
    meta?: {
      page: number;
      per_page: number;
      max_page: number;
      count: number;
    };
  }