const Employee= require('../models/empModels');

 const addNewEmployee = (req, res) => {
    let newEmployee = new Employee({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    description:req.body.description,
    phone:req.body.phone});

    newEmployee.save((err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

 const getEmployee = (req, res) => {
    Employee.find({}, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

 const getEmployeeWithID = (req, res) => {
    Employee.findById(req.params.employeeId, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
}

const updateEmployee = (req, res) => {
    Employee.findOneAndUpdate({ _id: req.params.employeeId}, req.body, { new: true }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

const deleteEmployee = (req, res) => {
    Employee.remove({ _id: req.params.employeeId }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Employee'});
    })
}
module.exports={
    addNewEmployee, 
    getEmployee, 
    getEmployeeWithID, 
    updateEmployee,
    deleteEmployee,
};
