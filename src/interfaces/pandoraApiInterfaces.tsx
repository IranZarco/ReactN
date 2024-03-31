export interface TareasResponse {
    _id:         string;
    titulo:      string;
    descripcion: string;
    estado:      string;
    __v:         number;
}

export interface ExamenResponse {
    _id:        string;
    nombre:     string;
    apellido:   string;
    edad:       string;
    genero:     string;
    __v:        number;
}

export interface UsersResponse {
    id_usuario:     string ;
    username:       string;
    email:          string;
    password:       string;
    cp:             string;
    __v:            number;
}

export interface MaterialsResponse {
    id_material:    string ;
    nombre:         string;
    peso:           string;
    densidad:       string;
    tipo:           string;
    costo_my:       string;
    costo_mn:       string;
    __v:            number;
}