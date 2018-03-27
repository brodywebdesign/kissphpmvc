<?php
namespace Modules\VTail\Controllers;
use \Library\Controller;
use Modules\VTail\Controllers\Lib\BillAcceptor as HardwareBillAcceptor;
use Modules\VTail\Controllers\Lib\Machine as HardwareMachine;

class Machine extends Controller
{

    public function status()
    {
        $this->machine = new HardwareMachine();
        $machine_id = $this->getRequest()->getParam('machine_id');        
        if(isset($_POST['Process']) && $_POST['Process'] === 'Set-Status') {
            
        }
        
        //check the param
        //look up the machine
        //choose if post or get
        //verify the update, or return the machine status
        //add the status if the machine exists.
    }

    public function stock()
    {

        $machine_id = $this->getRequest()->getParam('machine_id');
        //check the param
        //look up the machine
        //choose if post or get
        //verify the update, or return the machine stock
        //add the stock update if the machine exists.
    }
    
    public function authenticate() {
        
    }
    
    public function billCollectorReport() {

        $machine_id = $this->getRequest()->getParam('machine_id');
    }
    
    public function buttonPressReport() {

        $machine_id = $this->getRequest()->getParam('machine_id');
        
    }
    
    public function sensorTriggerReport() {

        $machine_id = $this->getRequest()->getParam('machine_id');
    }
}
