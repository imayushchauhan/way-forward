import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  task: Task = {
    previousValue: 0,
    currentValue: 0,
    previousOperator: null,
    currentOperator: null,
    isOperator: null
  };

  constructor() { 
  }

  ngOnInit() {
  }

  getButtonClicked(button){
    switch(button){
      case 1:
        this.processOperand(button);
        break;
      case 2:
        this.processOperand(button); 
        break; 
      case 3:
        this.processOperand(button);
        break;
      case 4:
        this.processOperand(button);
        break;
      case 5:
        this.processOperand(button);
        break;
      case 6:
        this.processOperand(button);  
        break;
      case 7:
        this.processOperand(button);
        break;
      case 8:
        this.processOperand(button);
        break;
      case 9:
        this.processOperand(button);
        break;
      case 0:
        this.processOperand(button);
        break;
      case '+':
        this.processOperator(button);
        break;
      case '-':
        this.processOperator(button);
        break;
      case 'x':
        this.processOperator(button);
        break;
      case '/':
        this.processOperator(button);
        break;
      case '=':
        this.result();
        break;
      case 'C':
        this.reset();
        break;
    }
  }

  processOperand(operand) {
    if(this.task.isOperator)
      this.task.currentValue = null;

    if(this.task.currentValue == null) {
      this.task.currentValue = operand;
    }
    else {
      this.task.currentValue = parseInt(this.task.currentValue.toString() + operand.toString());
    }

    this.task.isOperator = false;
  }

  processOperator(operator) {
    if(this.task.isOperator)
      return null;

    this.task.isOperator = true; 
    this.task.currentOperator = operator; 

    switch(this.task.previousOperator){
      case '+':             
        this.task.currentValue = this.task.previousValue + this.task.currentValue;              
        break;
      case '-':      
        this.task.currentValue = this.task.previousValue - this.task.currentValue;   
        break;
      case 'x':       
        this.task.currentValue = this.task.previousValue * this.task.currentValue;     
        break;
      case '/':       
        this.task.currentValue = this.task.previousValue / this.task.currentValue;      
        break;
    }

    this.task.previousValue = this.task.currentValue;  
    this.task.previousOperator = this.task.currentOperator;
  }

  result() {
    switch(this.task.currentOperator){
      case '+':
        this.task.currentValue = this.task.currentValue + this.task.previousValue;
        break;
      case '-':
        this.task.currentValue = this.task.previousValue - this.task.currentValue;
        break;
      case 'x':
        this.task.currentValue = this.task.currentValue * this.task.previousValue;
        break;
      case '/':
        this.task.currentValue = this.task.previousValue / this.task.currentValue;
        break;
    }

    this.task.previousOperator = null;
    this.task.currentOperator = null; 
    this.task.previousValue = this.task.currentValue;
  }

  reset() {
    this.task.currentValue = 0;
    this.task.previousValue = 0;
    this.task.previousOperator = null;
    this.task.currentOperator = null;
    this.task.isOperator = null;
  }
}
