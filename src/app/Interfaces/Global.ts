export interface Response {
    collection?: Collection;
}

export interface Collection {
    version?:  string;
    href?:     string;
    items?:    Item[];
    metadata?: Metadata;
    links?:    CollectionLink[];
}

export interface Item {
    href?:  string;
    data?:  Datum[];
    links?: ItemLink[];
}

export interface Datum {
    center?:            string;
    date_created?:      Date;
    description?:       string;
    keywords?:          string[];
    media_type?:        MediaType;
    nasa_id?:           string;
    photographer?:      string;
    title?:             string;
    album?:             string[];
    location?:          string;
    description_508?:   string;
    secondary_creator?: string;
}

export enum MediaType {
    Image = "image",
}

export interface ItemLink {
    href?:   string;
    rel?:    Rel;
    render?: MediaType;
}

export enum Rel {
    Preview = "preview",
}

export interface CollectionLink {
    rel?:    string;
    prompt?: string;
    href?:   string;
}

export interface Metadata {
    total_hits?: number;
}
