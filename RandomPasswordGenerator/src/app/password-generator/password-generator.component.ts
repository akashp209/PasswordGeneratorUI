import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  lowecase:string='abcdefghijklmnopqrstuvwxyz'; //26
  uppercase:string='ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //26
  numbers:string='0123456789';//10
  specialCharacters='!@$%^&*()_+-{[]}<>.,/*';//22

  passwordLength:number=8;
  color:ThemePalette='primary';
  isLowercase:boolean=false;
  isUppercase:boolean=false;
  isNumber:boolean=false;
  isSpecial:boolean=false;
  generatedPassword:string='';
  isValidRange:boolean=false;

  public validateRange(){
    //console.log(this.passwordLength);
      if(this.passwordLength < 8   || this.passwordLength > 12 || this.passwordLength == null){
        this.isValidRange =  true;
      }else{
        this.isValidRange = false;
      }
  }
  public generateRandomPassword()
  {
    this.generatedPassword ='';
    let tempPasswordlength = this.passwordLength;
      let temp = this.lowecase;
      if(this.isLowercase){
        let lower_val =  this.getRandomValue(26);
        this.generatedPassword += this.lowecase[lower_val];
        tempPasswordlength -= 1;
      }

      if(this.isUppercase){
        let upper_val =  this.getRandomValue(26);
        this.generatedPassword += this.uppercase[upper_val];
        tempPasswordlength -= 1;
        temp += this.uppercase;
      }
      if(this.isNumber){
        let num_val =  this.getRandomValue(10);
        this.generatedPassword += this.numbers[num_val];
        tempPasswordlength -= 1;
        temp += this.numbers;
      }
      if(this.isSpecial){
        let special_val =  this.getRandomValue(22);
        this.generatedPassword += this.specialCharacters[special_val];
        tempPasswordlength -= 1;
        temp += this.specialCharacters;
      }
      //console.log(temp);
      let len = temp.length;
      //console.log(tempPasswordlength);
      for(let i=1;i<=tempPasswordlength;i++){
        let val = this.getRandomValue(len);
        //console.log(val);
        this.generatedPassword += temp[val];
      }
      //this.passwordLength = 8;
  }

  public getRandomValue(max:number):number{
    return Math.floor(Math.random() * Math.floor(max));
  }
}
