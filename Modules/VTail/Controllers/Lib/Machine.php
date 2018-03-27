<?php
namespace Modules\VTail\Controllers\Lib;
use Modules\VTail\Controllers\Lib\Pin;
class Machine {
    
    const PIN_01 = Pin::DC3V;
    const PIN_02 = Pin::DC5V;
    
    private $pin_03;//SDA1  :: p02
    const PIN_04 = Pin::DC5V;
    
    private $pin_05;//SCL1  :: p03
    const PIN_06 = Pin::COM;
    
    private $pin_07;//CLk0  :: p04 
    private $pin_08;//txd   :: p14
    
    const PIN_09 = Pin::COM;
    private $pin_10;//rxd  :: p15
    
    private $pin_11;//p17
    private $pin_12;//p18
    
    private $pin_13;//p27
    const PIN_14 = Pin::COM;
    
    private $pin_15;//p22
    private $pin_16;//p23
    
    const PIN_17 = Pin::DC3V;
    private $pin_18;//p24
    
    private $pin_19;//mosi   :: p10
    const PIN_20 = Pin::COM;    
    
    private $pin_21;//miso   :: p09
    private $pin_22;//p25
    
    private $pin_23;//sclk   :: p11
    private $pin_24;//ce0    :: p08 
    
    const PIN_25 = Pin::COM;
    private $pin_26;//ce1    :: p07
    
    private $pin_27;//dat dsd
    private $pin_28;//dsc clk
    
    private $pin_29;//p05
    const PIN_30 = Pin::COM;
    
    private $pin_31;//p06
    private $pin_32;//p12
    
    private $pin_33;//p13
    const PIN_34 = Pin::COM;
    
    private $pin_35;//p19
    private $pin_36;//p16
    
    private $pin_37;//p26
    private $pin_38;//p20
    
    const PIN_39 = Pin::COM;
    private $pin_40;//p21
    
    /*
        LED's 
    */    
    //Harness One
    public $led_1;
    public $led_2;
    public $led_3;
    //Harness Two
    public $led_4;
    
    /*
        Button
    */
    //Harness One
    public $button_1;
    public $button_2;
    public $button_3;
    //Harness Two
    public $button_4;
    
    /*
        Sensors
    */
    //Harness One
    public $sensor_1;
    public $sensor_2;
    public $sensor_3;
    //Harness Two
    public $sensor_4;
    
    /*
        Motors
    */
    //Harness One
    public $motor_1;
    public $motor_2;
    public $motor_3;
    //Harness Two
    public $motor_4;
    
    public function __construct() {
        $this->pin_03 = new Pin();//SDA1  :: p02
        $this->pin_05 = new Pin();//SCL1  :: p03
        $this->pin_07 = new Pin();//CLk0  :: p04 
        $this->pin_08 = new Pin();//txd   :: p14
        $this->pin_10 = new Pin();//rxd  :: p15
        $this->pin_11 = new Pin();//p17
        $this->pin_12 = new Pin();//p18
        $this->pin_13 = new Pin();//p27
        $this->pin_15 = new Pin();//p22
        $this->pin_16 = new Pin();//p23
        $this->pin_18 = new Pin();//p24
        $this->pin_19 = new Pin();//mosi   :: p10
        $this->pin_21 = new Pin();//miso   :: p09
        $this->pin_22 = new Pin();//p25
        $this->pin_23 = new Pin();//sclk   :: p11
        $this->pin_24 = new Pin();//ce0    :: p08
        $this->pin_26 = new Pin();//ce1    :: p07
        $this->pin_27 = new Pin();//dat dsd
        $this->pin_28 = new Pin();//dsc clk
        $this->pin_29 = new Pin();//p05
        $this->pin_31 = new Pin();//p06
        $this->pin_32 = new Pin();//p12
        $this->pin_33 = new Pin();//p13
        $this->pin_35 = new Pin();//p19
        $this->pin_36 = new Pin();//p16
        $this->pin_37 = new Pin();//p26
        $this->pin_38 = new Pin();//p20
        $this->pin_40 = new Pin();//p21
    
        /*
            LED's 
        */    
        //Harness One
        $this->led_1 = $this->pin_03;
        $this->led_2 = $this->pin_05;
        $this->led_3 = $this->pin_11;
        //Harness Two
        $this->led_4 = $this->pin_12;
        
        /*
            Button
        */
        //Harness One
        $this->button_1 = $this->pin_13;
        $this->button_2 = $this->pin_15;
        $this->button_3 = $this->pin_16;
        //Harness Two
        $this->button_4 = $this->pin_18;
        
        /*
            Sensors
        */
        //Harness One
        $this->sensor_1 = $this->pin_22;
        $this->sensor_2 = $this->pin_29;
        $this->sensor_3 = $this->pin_31;
        //Harness Two
        $this->sensor_4 = $this->pin_32;
        
        /*
            Motors
        */
        //Harness One
        $this->motor_1 = $this->pin_33;
        $this->motor_2 = $this->pin_35;
        $this->motor_3 = $this->pin_36;
        //Harness Two
        $this->motor_4 = $this->pin_37;
    }
    
    public function __call($name, $args) {
        if(isset($args[0]) && $args[0] instanceof Pin ) {
            switch($name) {
                case 'toggleLed':
                case 'toggleButton':
                case 'toggleSensor':
                case 'toggleMotor':
                    return $args[0]->togglePin();
                    break;
    
                case 'setLedToPullUp':
                case 'setButtonToPullUp':
                case 'setSensorToPullUp':
                case 'setMotorToPullUp':
                    return $args[0]->pullUp();
                    break;
                
                case 'setLedToPullDown':
                case 'setButtonToPullDown':
                case 'setSensorToPullDown':
                case 'setMotorToPullDown':
                    return $args[0]->pullDown();
                    break;
            }            
        }
        debug($args);
    }
}