import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../auth/shared/models/user.model';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(users: User[] | null, userId: string): User {
    return users?.find(user => user.id === userId)!;
  }

}
