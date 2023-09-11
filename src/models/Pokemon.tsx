export type Pokemon={
    id:number,
    name:string,
    abilities:AbilityOuter[],
    moves:MoveOuter[]
}

export type AbilityOuter={
    ability:AbilityInner
}

export type AbilityInner={
    name:string
}

export type MoveOuter={
    move:MoveInner
}

export type MoveInner={
    name:string
}
