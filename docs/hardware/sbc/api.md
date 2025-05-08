# SBC API Reference

This section contains the API reference for the Single Board Computer.

## API Overview

- System Management
- GPIO Control
- Communication Interfaces
- Storage Access


# MBX ADC APIs

The ADC driver for the Per4mer SOM platform provides a robust interface for the analog-to-digital converter (ADC). This driver facilitates ADC initialization, configuration, data acquisition, and SPI communication, ensuring precise and efficient sampling for high-accuracy analog signal processing. The ADC is an 8-channel, 24-bit delta-sigma converter, designed for high-precision applications with low noise and high data rates. The driver supports configuring individual channels, managing gain settings, and selecting sampling rates to meet diverse application requirements.

---

#### Includes

```c
#include <adc.h>
```

## Key Functions

### `MBX_adcInit`

```c
ADC_Status_TypeDef MBX_adcInit(ADC_Config_TypeDef *init)
```

Initializes the ADC with the provided configuration, establishing communication, setting gain, and configuring the data rate.

#### Example

```c
// Create an ADC configuration structure object with default settings:
// - Sampling rate set to 250 samples per second (SPS)
// - Gain set to 32 for all channels
ADC_Config_TypeDef adc_config = ADC_INIT_DEFAULT_250SPS_ALLGAIN32();

// Initialize the ADC using the configuration structure
if (MBX_adcInit(&adc_config) == ADC_OK) {
    printf("ADC initialized successfully.\n");
} else {
    printf("ADC initialization failed.\n");
}
```

> [!NOTE]
> Initializes ADC communication.
> Configures gain and data rate.
> Executes startup commands for reliable operation.


#### Parameters

- `init`: Pointer to the `ADC_Config_TypeDef` structure.
  - `dataRate`: Oversampling rate (must be within valid range).
  - `gain`: Array of gain values for each channel (must be within valid range).

#### Return Values

| Status                   | Description                              |
|--------------------------|------------------------------------------|
| `ADC_OK`                 | Initialization successful                |
| `ADC_PARAMETER_ERROR`    | Invalid data rate or gain value          |
| `ADC_INIT_ERROR`         | Initialization failure (e.g., reset issue) |
| `ADC_COMMUNICATION_ERROR`| SPI communication setup failure          |

---

### `MBX_adcGet`

```c
ADC_Status_TypeDef MBX_adcGet(int32_t *data, uint8_t n_channel)
```

Retrieves ADC data for the specified number of channels.

> [!NOTE]
> Calls `ADS131M08_GetAdc()` to fetch ADC data.
> Maps returned status to `ADC_Status_TypeDef` values.

#### Parameters

- `data`: Pointer to an array for storing ADC data.
- `n_channel`: Number of channels to read.

#### Return Values

| Status                | Description                     |
|-----------------------|---------------------------------|
| `ADC_OK`              | Data retrieval successful       |
| `ADC_CRC_ERROR`       | CRC mismatch detected           |
| `ADC_PARAMETER_ERROR` | Invalid parameter passed        |
| `ADC_ERROR`           | General error                   |

---

## Enumerations

### `ADC_Status_TypeDef`

Defines status codes for ADC operations.

| Enumerator               | Description                     |
|--------------------------|---------------------------------|
| `ADC_OK`                 | Operation successful            |
| `ADC_ERROR`              | General error                   |
| `ADC_CRC_ERROR`          | CRC error                       |
| `ADC_PARAMETER_ERROR`    | Parameter error                 |
| `ADC_COMMUNICATION_ERROR`| Communication error             |
| `ADC_INIT_ERROR`         | Initialization error            |

---

### `ADC_Gain_TypeDef`

Specifies available gain settings for ADC channels.

| Enumerator   | Gain Value |
|--------------|------------|
| `adcGain1`   | 1          |
| `adcGain2`   | 2          |
| `adcGain4`   | 4          |
| `adcGain8`   | 8          |
| `adcGain16`  | 16         |
| `adcGain32`  | 32         |
| `adcGain64`  | 64         |
| `adcGain128` | 128        |

---

### `ADC_SamplingRate_TypeDef`

Lists supported ADC sampling rates.

| Enumerator           | Sampling Rate (SPS) |
|----------------------|---------------------|
| `adcSampleRate32000` | 32,000             |
| `adcSampleRate16000` | 16,000             |
| `adcSampleRate8000`  | 8,000              |
| `adcSampleRate4000`  | 4,000              |
| `adcSampleRate2000`  | 2,000              |
| `adcSampleRate1000`  | 1,000              |
| `adcSampleRate500`   | 500                |
| `adcSampleRate250`   | 250                |

---

### `ADC_Channel_TypeDef`

Defines available ADC channels.

| Enumerator | Channel  |
|------------|----------|
| `adcCh0`   | Channel 0 |
| `adcCh1`   | Channel 1 |
| `adcCh2`   | Channel 2 |
| `adcCh3`   | Channel 3 |
| `adcCh4`   | Channel 4 |
| `adcCh5`   | Channel 5 |
| `adcCh6`   | Channel 6 |
| `adcCh7`   | Channel 7 |

---

## Structures

### `ADC_Config_TypeDef`

Holds ADC configuration parameters.

#### Public Members

- `ADC_Gain_TypeDef gain[ADC_CH_COUNT]`: Gain settings for each ADC channel.
- `ADC_SamplingRate_TypeDef dataRate`: ADC sampling rate.

---



# ESP32-C6 BLE APIs

The ESP32-C6 Bluetooth Low Energy (BLE) interface APIs provide a comprehensive implementation for handling BLE communication on the ESP32-C6 module. These APIs support initializing the module as a BLE server, configuring services and characteristics, managing advertisements, and handling data transmission. Developed by the Microbin Firmware Team, this implementation ensures reliable and efficient BLE operations for embedded applications.

---

#### Includes

```c
#include <esp32c6.h>
```

## Key Functions

### `ESPAT_BleServerInit`

```c
ESPAT_Status_TypeDef ESPAT_BleServerInit(void)
```

Initializes the ESP32-C6 module as a BLE server.

This function configures the BLE stack, enabling the ESP32-C6 to accept connections from BLE clients. It must be called before advertising services or handling BLE communication.

#### Return Values

| Status       | Description                              |
|--------------|------------------------------------------|
| `ESPAT_OK`   | Initialization successful                |
| `ESPAT_ERROR`| Initialization failed                    |

---

### `ESPAT_SetDeviceName`

```c
ESPAT_Status_TypeDef ESPAT_SetDeviceName(const char *name)
```

Sets the BLE device name for the ESP32-C6 module.

This function configures the device name visible to other BLE devices during scanning, facilitating easy identification for connections.

#### Parameters

- `name`: Pointer to a string containing the desired BLE device name.

#### Return Values

| Status       | Description                              |
|--------------|------------------------------------------|
| `ESPAT_OK`   | Device name set successfully             |
| `ESPAT_ERROR`| Operation failed                         |

---

### `ESPAT_BleAdvStart`

```c
ESPAT_Status_TypeDef ESPAT_BleAdvStart(const ESPAT_BleAdv_Config *adv_config)
```

Starts BLE advertising with the specified configuration.

This function initializes and starts BLE advertising using the provided configuration, allowing customization of advertisement data such as device name, UUID, manufacturer-specific data, and power level inclusion.

#### Parameters

- `adv_config`: Pointer to an `ESPAT_BleAdv_Config` structure containing:
  - `device_name`: Device name for BLE advertisement.
  - `manufacture_data`: Manufacturer-specific data for the advertisement.
  - `uuid`: UUID for BLE advertisement.
  - `include_power`: Flag to include power information (1 = Yes, 0 = No).

#### Return Values

| Status       | Description                              |
|--------------|------------------------------------------|
| `ESPAT_OK`   | Advertising started successfully         |
| `ESPAT_ERROR`| Operation failed (e.g., invalid parameters or command failure) |

---

### `ESPAT_BleNotify`

```c
ESPAT_Status_TypeDef ESPAT_BleNotify(uint8_t srv_index, uint8_t char_index, const char *data, size_t data_len)
```

Sends a BLE notification to a connected device.

This function transmits a notification from the specified BLE service and characteristic to a connected BLE client in a non-blocking manner, ensuring proper handling of transmission status and retries.

#### Parameters

- `srv_index`: Index of the BLE service containing the characteristic.
- `char_index`: Index of the characteristic within the specified service.
- `data`: Pointer to the data buffer containing the notification payload.
- `data_len`: Length of the data to be sent in bytes.

#### Return Values

| Status       | Description                              |
|--------------|------------------------------------------|
| `ESPAT_OK`   | Notification sent successfully           |
| `ESPAT_ERROR`| Operation failed (e.g., communication issues or invalid parameters) |

---

### `ESPAT_BleIndicate`

```c
ESPAT_Status_TypeDef ESPAT_BleIndicate(uint8_t srv_index, uint8_t char_index, const char *data, size_t data_len)
```

Sends a BLE indication to a connected device.

This function transmits an indication from the specified BLE service and characteristic, requiring acknowledgment from the client to ensure reliable data transmission.

#### Parameters

- `srv_index`: Index of the BLE service containing the characteristic.
- `char_index`: Index of the characteristic within the specified service.
- `data`: Pointer to the data buffer containing the indication payload.
- `data_len`: Length of the data to be sent in bytes.

#### Return Values

| Status       | Description                              |
|--------------|------------------------------------------|
| `ESPAT_OK`   | Indication sent and acknowledged         |
| `ESPAT_ERROR`| Operation failed (e.g., communication issues or invalid parameters) |

---

### `ESPAT_BleSetAtt`

```c
ESPAT_Status_TypeDef ESPAT_BleSetAtt(uint8_t srv_index, uint8_t char_index, const char *data, size_t data_len)
```

Updates the value of a BLE GATT characteristic attribute.

This function sets the attribute value of a specified BLE service and characteristic, which can be read by connected BLE clients upon request.

#### Parameters

- `srv_index`: Index of the BLE service containing the characteristic.
- `char_index`: Index of the characteristic within the specified service.
- `data`: Pointer to the data buffer containing the new attribute value.
- `data_len`: Length of the data to be set in bytes.

#### Return Values

| Status       | Description                              |
|--------------|------------------------------------------|
| `ESPAT_OK`   | Attribute value updated successfully     |
| `ESPAT_ERROR`| Operation failed (e.g., communication issues or invalid parameters) |

---

## Enumerations

### `ESPAT_Status_TypeDef`

Defines status codes for ESP-AT command operations.

| Enumerator      | Description                     |
|-----------------|-------------------------------|
| `ESPAT_OK`      | Command executed successfully  |
| `ESPAT_ERROR`   | Error occurred during execution|
| `ESPAT_TIMEOUT` | Command timeout occurred       |

---

## Structures

### `ESPAT_BleAdv_Config`

Holds configuration parameters for ESP32 BLE advertisement.

#### Public Members

- `char *device_name`: Device name for BLE advertisement.
- `char *manufacture_data`: Manufacturer-specific data included in the advertisement.
- `uint16_t uuid`: UUID for BLE advertisement.
- `uint8_t include_power`: Flag to include power information (1 = Yes, 0 = No).




# ESP32-C6 WiFi APIs

The ESP32-C6 WiFi driver for the Per4mer SOM platform provides a robust interface for managing wireless connectivity. This module enables network configuration, connection handling, and data transmission for IoT and embedded applications. It leverages AT commands to interact with the ESP32-C6 module, ensuring reliable and efficient WiFi operations.

---

## Key Functions

### `ESPAT_WifiSetMode`

```c
ESPAT_Status_TypeDef ESPAT_WifiSetMode(uint8_t mode)
```

Sets the WiFi operating mode of the ESP32-C6 module.

This function configures the WiFi mode (Station, SoftAP, or both)

#### Parameters

- `mode`: WiFi mode to set (1 = Station, 2 = SoftAP, 3 = Station + SoftAP).

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | Command successful            |
| `ESPAT_ERROR`| Command failed                |

---

### `ESPAT_WifiGetIpAddress`

```c
ESPAT_Status_TypeDef ESPAT_WifiGetIpAddress(char *ip_buffer, size_t buffer_size)
```

Retrieves the IP address of the ESP32-C6 module.

This function queries the current IP address using an AT command and stores it in the provided buffer.

#### Parameters

- `ip_buffer`: Pointer to the buffer for storing the IP address.
- `buffer_size`: Size of the buffer.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | IP address retrieved          |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_WifiGetMacAddress`

```c
ESPAT_Status_TypeDef ESPAT_WifiGetMacAddress(char *mac_buffer, size_t buffer_size)
```

Retrieves the MAC address of the ESP32-C6 module in station mode.

This function sends an AT command to obtain the MAC address and stores it in the provided buffer.

#### Parameters

- `mac_buffer`: Pointer to the buffer for storing the MAC address.
- `buffer_size`: Size of the buffer.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | MAC address retrieved         |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_WifiDhcpConfig`

```c
ESPAT_Status_TypeDef ESPAT_WifiDhcpConfig(uint8_t mode, uint8_t enable)
```

Configures DHCP settings for the ESP32-C6 module.

This function enables or disables DHCP for the specified WiFi mode (Station, SoftAP, or both).

#### Parameters

- `mode`: WiFi mode (0 = Station, 1 = SoftAP, 2 = Both).
- `enable`: DHCP setting (0 = Disable, 1 = Enable).

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | DHCP configured               |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_WifiPowerSave`

```c
ESPAT_Status_TypeDef ESPAT_WifiPowerSave(uint8_t mode)
```

Configures the WiFi power-saving mode of the ESP32-C6 module.

This function sets the power-saving mode.

#### Parameters

- `mode`: Power-saving mode (0 = None, 1 = Minimum, 2 = Maximum).

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | Power-saving mode set         |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_WifiApGetClientList`

```c
ESPAT_Status_TypeDef ESPAT_WifiApGetClientList(char *client_list, size_t buffer_size)
```

Retrieves the list of connected clients in SoftAP mode.

This function queries the ESP32-C6 module for connected client details (IP and MAC addresses) and stores them in the provided buffer.

#### Parameters

- `client_list`: Pointer to the buffer for storing the client list.
- `buffer_size`: Size of the buffer.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | Client list retrieved         |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_WifiScan`

```c
ESPAT_Status_TypeDef ESPAT_WifiScan(char *scan_result, size_t buffer_size)
```

Performs a WiFi scan to detect available networks.

This function initiates a WiFi scan using AT commands, storing details of nearby access points (SSID, signal strength, security type) in the provided buffer.

#### Parameters

- `scan_result`: Pointer to the buffer for storing scan results.
- `buffer_size`: Size of the buffer.

#### Return Values

| Status          | Description                   |
|-----------------|-------------------------------|
| `ESPAT_OK`      | Scan successful               |
| `ESPAT_ERROR`   | Scan failed                   |
| `ESPAT_TIMEOUT` | Scan timed out                |

---

### `ESPAT_WifiSetDns`

```c
ESPAT_Status_TypeDef ESPAT_WifiSetDns(const char *dns1, const char *dns2)
```

Configures DNS server addresses for the ESP32-C6 WiFi connection.

This function sets primary and secondary DNS servers using AT commands.

#### Parameters

- `dns1`: Pointer to the primary DNS server address string.
- `dns2`: Pointer to the secondary DNS server address string.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | DNS servers configured        |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_TcpServerMode`

```c
ESPAT_Status_TypeDef ESPAT_TcpServerMode(uint16_t port)
```

Enables TCP server mode on the ESP32-C6 module.

This function enables multiple connections and starts a TCP server on the specified port.

#### Parameters

- `port`: TCP port number for the server.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | TCP server enabled            |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_TcpClientMode`

```c
ESPAT_Status_TypeDef ESPAT_TcpClientMode(void)
```

Configures the ESP32-C6 module for TCP client mode.

This function sets single-connection mode using.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | TCP client mode enabled       |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_WifiGetConnectionStatus`

```c
ESPAT_Status_TypeDef ESPAT_WifiGetConnectionStatus(char *status_buffer, size_t buffer_size)
```

Retrieves the current WiFi connection status.

#### Parameters

- `status_buffer`: Pointer to the buffer for storing the status response.
- `buffer_size`: Size of the buffer.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | Status retrieved              |
| `ESPAT_ERROR`| Operation failed              |

---

### `ESPAT_TcpCloseConnection`

```c
ESPAT_Status_TypeDef ESPAT_TcpCloseConnection(uint8_t link_id)
```

Closes an active TCP connection.


#### Parameters

- `link_id`: ID of the connection to close.

#### Return Values

| Status       | Description                   |
|--------------|-------------------------------|
| `ESPAT_OK`   | Connection closed             |
| `ESPAT_ERROR`| Operation failed              |

---

## Enumerations

### `wifi.ConcurrentModificationException`

Defines authentication modes for SoftAP.

| Enumerator                 | Description                   |
|----------------------------|-------------------------------|
| `ESP_AP_AUTH_MODE_OPEN`    | Open (no authentication)      |
| `ESP_AP_AUTH_MODE_WPA_PSK` | WPA PSK                       |
| `ESP_AP_AUTH_MODE_WPA2_PSK`| WPA2 PSK                      |
| `ESP_AP_AUTH_MODE_WPA_WPA2_PSK`| WPA/WPA2 PSK             |

---

## Structures

### `ESPAT_WifiAp_Config`

Holds configuration parameters for SoftAP mode.

#### Public Members

- `uint8_t ssid[32]`: SSID of the SoftAP (null-terminated if `ssid_len` is 0).
- `uint8_t password[64]`: Password of the SoftAP.
- `uint8_t ssid_len`: Optional length of the SSID field.
- `uint8_t channel`: Channel of the SoftAP.
- `wifi_auth_mode_t authmode`: Authentication mode (does not support AUTH_WEP, AUTH_WAPI_PSK, or AUTH_OWE; uses WIFI_CIPHER_TYPE_CCMP for WPA2_PSK, WPA2_WPA3_PSK, or WPA3_PSK).
- `uint8_t ssid_hidden`: Broadcast SSID (0 = broadcast, 1 = hidden).
- `uint8_t max_connection`: Maximum number of connected stations.

---

### `ESPAT_WifiSta_Config`

Holds configuration parameters for Station mode.

#### Public Members

- `uint8_t ssid[32]`: SSID of the target AP.
- `uint8_t password[64]`: Password of the target AP.

---


## Endpoints
Complete endpoint documentation will be available here.
## Examples
API usage examples will be documented here. 