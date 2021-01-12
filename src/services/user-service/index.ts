//TODO: Define module object

export module User {
  export interface CreateRequest {
    id: string
    name: string
    description: string
  }

  export interface Info extends CreateRequest {
    createdAt: Date
    createdBy: string
  }
}

export module Role {
  export interface CreateRequest {
    id: string
    name: string
    description: string
  }
  export interface Info extends CreateRequest {
    createdAt: Date
    createdBy: string
  }
}
