import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Array<Member> = [
      {
        id: 1,
        memberImg: '../../../../../assets/img/member/1.jpg',
        name: 'Maria Eduarda da Silva',
        email: 'dudamaria@gmail.com',
        password: '12345678',
        monthlyFee: 250,
        lastPayment: '2021-04-01',
        validRegistration: true,
        membership: 'Basic',
        memberprograms: 'Saúde Mental',
        membertratament: 'Hidroterapia',
        startDate: '2021-02-01'
      },
      {
        id: 2,
        memberImg: '../../../../../assets/img/member/2.jpg',
        name: 'Elisha Otis Freitas',
        email: 'eli.otis@gmail.com',
        password: 'eli1234ot',
        monthlyFee: 350,
        lastPayment: '2021-06-22',
        validRegistration: true,
        membership: 'Premium',
        memberprograms: 'Clínico',
        membertratament: 'Fisioterapia',
        startDate: '2020-04-01'
      },
      {
        id: 3,
        memberImg: '../../../../../assets/img/member/3.jpg',
        name: 'Gustavo Martins Oliveira',
        email: 'guto.oliveira@gmail.com',
        password: 'e5f6g7h8',
        monthlyFee: 500,
        lastPayment: '2021-07-15',
        validRegistration: false,
        membership: 'VIP',
        memberprograms: 'Clínico',
        membertratament: 'Reeducação Alimentar',
        startDate: '2019-05-20'
      },
      {
        id: 4,
        memberImg: '../../../../../assets/img/member/4.jpeg',
        name: 'Lunna Alves Santos',
        email: 'lua.santos@gmail.com',
        password: 'lua12345',
        monthlyFee: 250,
        lastPayment: '2021-09-12',
        validRegistration: true,
        membership: 'Basic',
        memberprograms: 'Vida Natural',
        membertratament: 'Geoterapia',
        startDate: '2021-07-05'
      },
      {
        id: 5,
        memberImg: '../../../../../assets/img/member/5.jpg',
        name: 'Bruno Meira Rocha',
        email: 'b.rocha@gmail.com',
        password: '24536709',
        monthlyFee: 420,
        lastPayment: '2021-10-19',
        validRegistration: true,
        membership: 'Ultimate',
        memberprograms: 'Day SPA',
        membertratament: 'Massagem Modeladora',
        startDate: '2020-12-15'
      },
      {
        id: 6,
        memberImg: '../../../../../assets/img/member/6.jpg',
        name: 'Aisha Dias Cavalcanti',
        email: 'aisha.dias@gmail.com',
        password: 'aisha098',
        monthlyFee: 420,
        lastPayment: '2021-11-02',
        validRegistration: true,
        membership: 'Ultimate',
        memberprograms: 'Clínico',
        membertratament: 'Estética',
        startDate: '2021-09-15'
      }
    ];

  constructor() { }

  getMembers() {
    return this.members;
  }

  getMemberById(id: string) {
    return this.members.find(member => member.id === parseInt(id));
  }

  getMemberByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.members.find(member => member.email === email && member.password === password);
  }

  generateNextId() {
    return this.members[this.members.length - 1].id + 1;
  }

  getDefaultMember(): Member {
    const TodaysDate = moment().format('YYYY/MM/DD');
    const newId = this.generateNextId();

    return {
      id: newId,
      memberImg: `../../../../../assets/img/member-img/${newId}.jpg`,
      name: '',
      email: '',
      password: '',
      monthlyFee: 0,
      lastPayment: TodaysDate,
      validRegistration: true,
      membership: 'Basic',
      memberprograms: 'Saúde Mental',
        membertratament: 'Hidroterapia',
      startDate: TodaysDate
    }
  }

  createMember(member: Member) {
    this.members.push(member);
    return this.members;
  }

  removeMember(id: number) {
    const memberIndex = this.members.findIndex((member) => member.id === Number(id));
    this.members.splice(memberIndex , 1);
  }

}
