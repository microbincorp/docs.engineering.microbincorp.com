# STM32 Clock Tree Configuration
## 1. Clock Sources.

| Clock sources                       | Clock source                             |
|-------------------------------------|------------------------------------------|
| HSE (High-speed External)           | 25 MHz Cristal oscillator                |
| LSE (Low-speed External)            | 32.768 KHz crystal oscillator            |
| HSI (High-Speed internal)           |16 Mhz Internal RC oscillator             |
| LSI (Low-speed internal)            | 32KHz internal RC oscillator             |

## 2. PLL Coniguration (Phase-Locked Loop)

The PLL (Phase-Locked Loop) is configured to multiply the clodk frequency to acheve high-performance system operation.

PLL Input Source:
HSE = 25MHz.
PLLM: Divider = 25. (Input clock frequency = HSE/PLLM = 25 MHz / 25 = 1 MHz)

#### PLL Dividers and Multipliers:

| Name | value |    Type    | forumula  | Output freq    |
|------|-------|------------|-----------|----------------|
| PLLN |  432  | Multiplier | PLLM*PLLN | 1*432 = 432 Mhz|
| PLLP |   2   |  Divider   | PLLN/PLLP | 432/2 = 216 Mhz|
| PLLQ |   8   |  Divider   | PLLN/PLLQ | 432/8 = 54 Mhz |

#### PLL Outputs:
Main PLL Output (SYSCLK): Drives the system clock at 216 MHz.
PLLQ Output: Configured to 54 MHz

#### PLLSAI1 Dividers and Multipliers: 
| Name    | vlaue |   Type     |  Formula	        |  Output Freq       |
|---------|-------|------------|--------------------|--------------------|
|PLLSAI1N |	192	  | Multiplier |  PLLM*PLLSAI1N	    | 1 * 192 = 192 Mhz  |
|PLLSAI1P |	4	  | Divider	   |  PLLSAI1N/PLLSAI1P | 192 / 4 = 48 Mhz   |
|PLLSAI1R|	2	  | Divider    |  PLLSAI1N/PLLSAI1R/div | 192 / 2 / 2 = 48 Mhz |

#### PLL Outputs: 
PLLSAIR Output: Configured to 48 MHz.
PLLSAIP Output: Configured to 48 MHz

PLLI2S Dividers and Multipliers: 
Name |	vlaue |	Type |	Formula |	Output Freq |
|----|--------|------|----------|---------------|
|PLLI2SN|	192|	Multiplier|	PLLM*PLLI2SN|1 * 192 = 192 Mhz|
|PLLI2SP	|2	|Divider	|PLLI2SN/PLLI2SP	|192 / 2 = 96 Mhz|
|PLLI2SR|	2|	Divider|	PLLI2SN/PLLI2SR|	192 / 2 = 96 Mhz|

#### PLL Outputs:
Main PLL Output (SYSCLK): Drives the system clock at 216 MHz.
PLLQ Output: Configured to 54 MHz

## 3.System Clock (SYSCLK) Source
PLLCLK (output of the main PLL). Frequency: 216 MHz.

## 4.Bus Clocks source from SYSCLK (216 MHz)
|BUS Name |	Prescaller|	Multiplier|	Freq |
|---------|-----------|-----------|------|
|AHB (HCLK)	|1	|NA	|216 MHz|
|APB1 Peripherals clocks|	4|	NA|	54 MHz|
|APB2 Peripherals clocks	|2	|NA	|108 MHz|
|APB1 Timer clocks|	4|	2|	108 MHz|
|APB2 Timer clocks	|2	|2	|216 MHz|

## 5.Peripheral Clock Configuration.
|Peripheral Name|	Clock IN|	Prescaller|	Freq|	Enabled|
|---------------|-----------|-------------|-----|----------|
|SPI1	|APB2	|16	|108/16 = 6 MHz	|✓|
|SPI2	|APB1	|-|	54 MHz|	
|SPI3	|APB1	|-|	54 MHz|	
|SPI4	|APB2	|8|	108/8 = 13 MHz|	✓|
|SPI5	|APB2	|32	|108/8 = 3 MHz	|✓|
|SPI6	|APB2	|16	|108/16 = 6 MHz	|✓|
|I2C1	|APB1	|required baud-rate|	54 MHz|	✓|
|I2C2	|APB1	|required baud-rate|	54 MHz|	✓|
|I2C3	|APB1	|-|	54 MHz|	
|I2C4	|APB1	|-|	54 MHz|	
|USART1	|APB2	|-|	108 MHz|	
|USART2	|APB1	|required baud-rate	54 MHz|	✓|
|USART3	|APB1	|-|	54 MHz|	
|UART4	|APB1	|-|	54 MHz|	
|UART5	|APB1	|-|	54 MHz|	
|USART6	|APB2	|required baud-rate	|108 MHz|	✓|
|UART7	|APB1	|-|	54 MHz|	
|UART8|	APB1|	-|	54 MHz|	
|CAN1|	APB1|	-|	54 MHz|	
|CAN2|	APB1|	-|	54 MHz|	
|CAN3|	APB1|	12|	4 MHz|	✓|
|SDMMC1|	PLL48CLK|	48|	1 MHz|	✓|
|SDMMC2|	APB2|	-|	108 MHz|
|LTDC|	PLLSAI1R|	-|	48 MHz|	✓|
|Ethernet PTP|	HCLK|	-|	216 MHz|	✓|
|USB|	PLLSAIP|	-|	48 MHz|	✓|
|I2S1|	PLLI2SR|	-|	96 MHz|
|I2S2|	PLLI2SR|	-|	96 MHz|	✓|
|I2S3|	PLLI2SR|	-|	96 MHz|	
|FMC|	AHB	2|	108 MHz|	✓|