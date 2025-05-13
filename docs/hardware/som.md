---
title: System on Modules
description: Documentation for MicroBin's System on Module products
---

# System on Modules

MicroBin's System on Modules (SoMs) are compact computing modules designed to be integrated into custom carrier boards. These modules contain the essential components of a computer system, including the processor, memory, and storage, allowing product designers to focus on application-specific features.

## Available Modules

| Module | Processor | RAM | Storage | Form Factor |
|--------|-----------|-----|---------|------------|
| MB-SOM50 | Dual-core ARM Cortex-A53 | 1GB | 8GB eMMC | 30mm x 50mm |
| MB-SOM100 | Quad-core ARM Cortex-A53 | 2GB | 16GB eMMC | 45mm x 70mm |
| MB-SOM200 | Octa-core ARM Cortex-A72/A53 | 4GB | 32GB eMMC | 50mm x 80mm |

## Integration Guide

### Carrier Board Design
When designing a custom carrier board for MicroBin SoMs, consider the following:

- Power delivery requirements
- Thermal dissipation
- Signal integrity for high-speed interfaces
- Connector compatibility

### Electrical Specifications
- Operating voltage: 3.3V
- I/O voltage: 1.8V/3.3V (configurable)
- Power consumption: 1-10W depending on load and model

### Software Support
All SoM modules are supported by:
- MicroBin Linux BSP
- Android BSP
- Custom RTOS builds

## Development Process

1. **Module Selection**
   Select the appropriate SoM based on your application requirements.

2. **Carrier Board Design**
   Design a custom carrier board with the necessary peripherals and interfaces.

3. **Integration Testing**
   Test the integrated system using our [validation suite](/hardware/validation).

4. **Production**
   Move to production with our [manufacturing support services](/hardware/manufacturing).

## Resources
- [Design Guidelines](/hardware/som-design-guidelines)
- [Reference Carrier Boards](/hardware/reference-designs)
- [BSP Documentation](/hardware/bsp)
