<?php
namespace Lib;
class BillAcceptor {    
    const CREDIT_1    = [b10000001, '81H'];
    const NOT_USED    = [b10000010, '82H'];
    const CREDIT_5    = [b10000011, '83H'];
    const CREDIT_10   = [b10001000, '84H'];
    const CREDIT_20   = [b10000101, '85H'];
    const CREDIT_50   = [b10000110, '86H'];
    const CREDIT_100  = [b10000111, '87H'];
    const RESERVED    = [b10001000, '88H'];
    const VEND        = [b10001001, '89H'];
    const RETURNED    = [b10001010, '8AH'];
    const REJECT      = [b10001011, '8BH'];
    const FAILURE     = [b10001100, '8CH'];
    const FULL_JAM    = [b10001101, '8DH'];
    __construct() {
        
    }
}