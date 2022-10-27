
export interface Account {
    id: string|null;
    institution: string;
    firstName: string;
    lastName: string;
    title: string;
    country: string;
    phone: string;
    email: string;
    password: string;
    createdAt: Date|null;
    updatedAt: Date|null;
}
