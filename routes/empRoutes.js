const {addNewEmployee, 
    getEmployee, 
    getEmployeeWithID, 
    updateEmployee,
    deleteEmployee, 
} =require('../controllers/empControllers');

const routes = (app)=>
{
    app.route('/employees')
    .get(getEmployee)
    .post(addNewEmployee);

    app.route('/employees/:employeeId')
    .get(getEmployeeWithID)
    .put(updateEmployee)
    .delete(deleteEmployee);
    
};
module.exports= routes;