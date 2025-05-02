
---
title: I/O Boards
description: Documentation for MicroBin's Input/Output expansion boards
---

# I/O Boards

MicroBin's I/O boards provide additional input and output capabilities for our Single Board Computers and System on Modules. These expansion boards allow you to extend the functionality of your base system with specialized interfaces and capabilities.

## Available I/O Boards

| Board | Compatible With | Key Features |
|-------|----------------|--------------|
| MB-IO-IND | All SBCs | Industrial I/O (4-20mA, 0-10V, RS485, RS232, CAN) |
| MB-IO-AI | SBC200, SBC300 | AI acceleration, dual camera inputs, hardware neural engine |
| MB-IO-COM | All SBCs | Extended communications (LoRa, Cellular, Zigbee, BLE) |
| MB-IO-DISP | All SBCs | Display interfaces (LVDS, eDP, MIPI DSI, dual HDMI) |

## Integration Guide

### Physical Connection
MicroBin I/O boards connect to the host system through:
- Direct header connection
- PCIe interface (where available)
- USB 3.0/USB-C interface

### Software Setup
1. Install the appropriate drivers from our [drivers repository](/hardware/drivers)
2. Configure the system using the I/O Configuration Utility
3. Test connections using the provided diagnostic tools

## Common Applications

### MB-IO-IND Applications
- Factory automation
- Building management systems
- Process control
- SCADA systems

### MB-IO-AI Applications
- Computer vision systems
- Voice recognition
- Predictive maintenance
- Machine learning at the edge

### MB-IO-COM Applications
- IoT gateways
- Remote monitoring stations
- Mesh network nodes
- Asset tracking

### MB-IO-DISP Applications
- Kiosks and digital signage
- HMI (Human Machine Interface)
- Multi-display systems
- Custom displays for harsh environments

## Specifications

Detailed electrical and mechanical specifications can be found in the [technical datasheet](/hardware/datasheets) for each board.
