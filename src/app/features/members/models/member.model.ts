export interface Member {
    id: number,
    memberImg: string,
    name: string,
    email: string,
    password: string,
    monthlyFee: number,
    lastPayment: string | Date,
    validRegistration: boolean,
    membership: 'Basic' | 'Ultimate' |'VIP' | 'Premium',
    memberprograms: 'Saúde Mental'|'Obsidade'|'Reabilitação'|'Clínico'|'Detox'|'Programa Fitness'|'Vida Natural'|'Day SPA'|'Outros',
    membertratament: 'Hidroterapia'|'Geoterapia'|'Fisioterapia'|'Massagemterapia'| 'Estética' |'Massagem Linfática'|'Massagem Modeladora'|'Reeducação Alimentar'|'Outros',
    startDate: string | Date
}