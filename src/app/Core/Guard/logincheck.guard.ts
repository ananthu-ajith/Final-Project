import { CanActivateFn } from '@angular/router';
import { DetailsService } from '../../Services/details.service';


export const logincheckGuard: CanActivateFn = (route, state) => {
 
  const users: any[] = JSON.parse(localStorage.getItem('users') || '[]');
const userinfo = localStorage.getItem('curuser');
const userpass = localStorage.getItem('curpass');

if (!userinfo || !userpass || !users.length) {
  alert('Incorrect username or password');
  return false;
}

for (const user of users) {
  if (user.Username === userinfo) {
    
    
      // Check if the password matches
      if (user.Password === userpass) {
          // console.log('Match found during loop');
          // Clear current user and password from local storage
          // localStorage.removeItem('curuser');
          // localStorage.removeItem('curpass');
          return true; // Allow navigation
      } else {
          alert('Incorrect password');
          return false; // Deny navigation
      }
  }
 
}



// If no match is found, display an alert for incorrect username
alert('Incorrect username');
return false; // Deny navigation

};
