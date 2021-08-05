export interface PaginatedResponse {
    count: number;
    next: string | null;
    previous: string | null;
    result: any[];
}