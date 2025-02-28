export interface ApiResponse {
    status: string;
    message: string;
    data: PetResponse;
}

export interface Owner {
    id: number;
    name: string;
    phone: string;
    email: string;
}

export interface Pet {
    id: number;
    name: string;
    type: string;
    breed: string;
    age: number;
    lastVaccine: string;
    nextVaccine: string;
    owner: Owner;
}

export interface PetResponse {
    data: Pet[];
}