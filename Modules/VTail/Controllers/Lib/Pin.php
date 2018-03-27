<?php
namespace Modules\VTail\Controllers\Lib;
class Pin {
    const PIN_HIGH  = 1;
    const PIN_LOW   = 0;
    
    const PULL_UP   = 'PULL_UP';
    const PULL_DOWN = 'PULL_DOWN';
    
    const COM       = self::PIN_LOW;
    
    const DC12V     = 'DC12V';
    const DC5V      = 'DC5V';
    const DC3V      = 'DC3V';
    
    private $pin;
    
    public function __construct($state = null, $circut = null) {
        if($state === self::PIN_LOW || $state === self::PIN_HIGH ) {
            $_state = $state;
        } else {
            $_state = self::PIN_LOW;
        }
        if($circut === self::PULL_DOWN || $circut === self::PULL_UP ) {
            $_circut = $circut;
        } else {
            $_circut = self::PULL_DOWN;
        }
        $this->pin = [$_state, $_circut];
        return $this;
    }
    
    public function getPin() {
        $x = $this->pin;
        return $x;
    }
    
    public function pullDown() {
        $this->pin[1] = self::PULL_DOWN;
        return $this;
    }
    
    public function pullUp() {
        $this->pin[1] = self::PULL_UP;
        return $this;
    }
    
    public function on() {
        $this->pin[0] = self::PIN_HIGH;
    }
    
    public function off() {
        $this->pin[0] = self::PIN_LOW;
    }
    
    public function togglePin() {
        $this->pin[0] = $this->pin[0] === self::PIN_LOW ? self::PIN_HIGH : self::PIN_LOW;
        return $this;
    }
}