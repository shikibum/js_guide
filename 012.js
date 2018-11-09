function Employee() {
  this.name = '';
  this.dept = 'general';
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = 'sales';
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
  WorkerBee.call(this);
  this.dept = 'engineering';
  this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = Engineer;

var mark = new WorkerBee;
mark.name = 'Doe, Mark';
mark.dept = 'admin';
mark.projects = ['navigator'];

mark.bonus = 3000;
Employee.prototype.specialty = 'none';


function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'general';
}

function WorkerBee(projs) {
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

function Engineer(mach) {
  this.dept = 'engineering';
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

var jane = new Engineer('belau');
// jane.name == '';
// jane.dept == 'engineering';
// jane.projects == [];
// jane.machine == 'belau';
// 継承されたプロパティには初期値を設定できない

function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');

function Employee() {
  this.name = '';
  this.dept = 'general';
}

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee;
var amy = new WorkerBee;
Employee.prototype.name = 'Unknown';
amy.name == '';
amy.dept == 'general';
amy.projects == [];
