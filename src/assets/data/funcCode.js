export const modbusData = [
  { value: '0x01', name: 'Read Coil Status (0x01)' },
  { value: '0x02', name: 'Read Input Status (0x02)' },
  { value: '0x03', name: 'Read Holding Registers (0x03)' },
  { value: '0x04', name: 'Read Input Registers (0x04)' },
  { value: '0x05', name: 'Force Single Coil (0x05)' },
  { value: '0x06', name: 'Preset Single Register (0x06)' },
  { value: '0x07', name: 'Read Exception Status (0x07)' },
  { value: '0x08', name: 'Diagnostics (0x08)' },
  { value: '0x09', name: 'Program 484 (0x09)' },
  { value: '0x0A', name: 'Poll 484 (0x0A)' },
  { value: '0x0B', name: 'Fetch Comm. Event Ctr. (0x0B)' },
  { value: '0x0C', name: 'Fetch Comm. Event Log (0x0C)' },
  { value: '0x0D', name: 'Program Controller (0x0D)' },
  { value: '0x0E', name: 'Poll Controller (0x0E)' },
  { value: '0x0F', name: 'Force Multiple Coils (0x0F)' }
]

export const dnp3Data = [
  { name: 'Confirm (0x00)', value: '0x00' },
  { name: 'Read (0x01)', value: '0x01' },
  { name: 'Write (0x02)', value: '0x02' },
  { name: 'Select (0x03)', value: '0x03' },
  { name: 'Operate (0x04)', value: '0x04' },
  { name: 'Dir Operate (0x05)', value: '0x05' },
  { name: 'Dir Operate - No resp (0x06)', value: '0x06' },
  { name: 'Freeze (0x07)', value: '0x07' },
  { name: 'Freeze - No resp (0x08)', value: '0x08' },
  { name: 'Freeze clear (0x09)', value: '0x09' },
  { name: 'Freeze clear - No resp (0x0A)', value: '0x0A' },
  { name: 'Freeze at time (0x0B)', value: '0x0B' },
  { name: 'Freeze at time - No reap (0x0C)', value: '0x0C' },
  { name: 'Cold restart (0x0D)', value: '0x0D' },
  { name: 'Warm restart (0x0E)', value: '0x0E' },
  { name: 'Initialize data (0x0F)', value: '0x0F' },
  { name: 'Initialize application (0x10)', value: '0x10' },
  { name: 'Start application (0x11)', value: '0x11' },
  { name: 'Stop application (0x12)', value: '0x12' },
  { name: 'Save configuration (0x13)', value: '0x13' },
  { name: 'Enable unsolicited (0x14)', value: '0x14' },
  { name: 'Disable unsolicited (0x15)', value: '0x15' },
  { name: 'Assign class (0x16)', value: '0x16' },
  { name: 'Delay measurement (0x17)', value: '0x17' },
  { name: 'Record current time (0x18)', value: '0x18' },
  { name: 'Open file (0x19)', value: '0x19' },
  { name: 'Close file (0x1A)', value: '0x1A' },
  { name: 'Delete file (0x1B)', value: '0x1B' },
  { name: 'Get file information (0x1C)', value: '0x1C' },
  { name: 'Authenticate file (0x1D)', value: '0x1D' },
  { name: 'Abort file (0x1E)', value: '0x1E' }
]

export const cipData = [
  { name: 'Get_Attributes_All (0x01)', value: '0x01' },
  { name: 'Set_Attributes_All (0x02)', value: '0x02' },
  { name: 'Get_Attribute_List (0x03)', value: '0x03' },
  { name: 'Set_Attribute_List (0x04)', value: '0x04' },
  { name: 'Reset (0x05)', value: '0x05' },
  { name: 'Start (0x06)', value: '0x06' },
  { name: 'Stop (0x07)', value: '0x07' },
  { name: 'Create (0x08)', value: '0x08' },
  { name: 'Delete (0x09)', value: '0x09' },
  { name: 'Multiple Service Packet (0x0A)', value: '0x0A' },
  { name: 'Apply_Attributes (0x0D)', value: '0x0D' },
  { name: 'Get_Attribute_Single (0x0E)', value: '0x0E' },
  { name: 'Set_Attribute_Single (0x10)', value: '0x10' },
  { name: 'Find_Next_Object_Instance (0x11)', value: '0x11' },
  { name: 'Restore (0x15)', value: '0x15' },
  { name: 'Save (0x16)', value: '0x16' },
  { name: 'No Operation (0x17)', value: '0x17' },
  { name: 'Get Member (0x18)', value: '0x18' },
  { name: 'Set Member (0x19)', value: '0x19' },
  { name: 'Insert Member (0x1A)', value: '0x1A' },
  { name: 'Remove Member (0x1B)', value: '0x1B' }
]

export const iec104Data = [
  { value: '0x01', name: 'Single point information (0x01)', tag: 'M_SP_NA_1' }, // 1
  { value: '0x02', name: 'Single point information with time tag (0x02)', tag: 'M_SP_TA_1' }, // 2
  { value: '0x03', name: 'Double point information (0x03)', tag: 'M_DP_NA_1' }, // 3
  { value: '0x04', name: 'Double point information with time tag (0x04)', tag: 'M_DP_TA_1' }, // 4
  { value: '0x05', name: 'Step position information (0x05)', tag: 'M_ST_NA_1' }, // 5
  { value: '0x06', name: 'Step position information with time tag (0x06)', tag: 'M_ST_TA_1' }, // 5
  { value: '0x07', name: 'Bit string of 32 bit (0x07)', tag: 'M_BO_NA_1' }, // 7
  { value: '0x08', name: 'Bit string of 32 bit with time tag (0x08)', tag: 'M_BO_TA_1' }, // 7
  { value: '0x09', name: 'Measured value, normalized value (0x09)', tag: 'M_ME_NA_1' }, // 9
  { value: '0x0A', name: 'Measured value, normalized value with time tag (0x0A)', tag: 'M_ME_TA_1' }, // 10
  { value: '0x0B', name: 'Measured value, scaled value (0x0B)', tag: 'M_ME_NB_1' }, // 11
  { value: '0x0C', name: 'Measured value, scaled value with time tag (0x0C)', tag: 'M_ME_TB_1' }, // 12
  { value: '0x0D', name: 'Measured value, short floating point value (0x0D)', tag: 'M_ME_NC_1' }, // 13
  { value: '0x0E', name: 'Measured value, short floating point value with time tag (0x0E)', tag: 'M_ME_TC_1' }, // 14
  { value: '0x0F', name: 'Integrated totals (0x0F)', tag: 'M_IT_NA_1' }, // 15
  { value: '0x10', name: 'Integrated totals with time tag (0x10)', tag: 'M_IT_TA_1' }, // 16
  { value: '0x11', name: 'Event of protection equipment with time tag (0x11)', tag: 'M_EP_TA_1' }, // 17
  { value: '0x12', name: 'Packed start events of protection equipment with time tag (0x12)', tag: 'M_EP_TB_1' }, // 18
  { value: '0x13', name: 'Packed output circuit information of protection equipment with time tag (0x13)', tag: 'M_EP_TC_1' }, // 19
  { value: '0x14', name: 'Packed single-point information with status change detection (0x14)', tag: 'M_PS_NA_1' }, // 20
  { value: '0x15', name: 'Measured value, normalized value without quality descriptor (0x15)', tag: 'M_ME_ND_1' }, // 21

  { value: '0x1E', name: 'Single point information with time tag CP56Time2a (0x1E)', tag: 'M_SP_TB_1' }, // 30
  { value: '0x1F', name: 'Double point information with time tag CP56Time2a (0x1F)', tag: 'M_DP_TB_1' }, // 31
  { value: '0x20', name: 'Step position information with time tag CP56Time2a (0x20)', tag: 'M_ST_TB_1' }, // 32
  { value: '0x21', name: 'Bit string of 32 bit with time tag CP56Time2a (0x21)', tag: 'M_BO_TB_1' }, // 33
  { value: '0x22', name: 'Measured value, normalized value with time tag CP56Time2a (0x22)', tag: 'M_ME_TD_1' }, // 34
  { value: '0x23', name: 'Measured value, scaled value with time tag CP56Time2a (0x23)', tag: 'M_ME_TE_1' }, // 35
  { value: '0x24', name: 'Measured value, short floating point value with time tag CP56Time2a (0x24)', tag: 'M_ME_TF_1' }, // 36
  { value: '0x25', name: 'Integrated totals with time tag CP56Time2a (0x25)', tag: 'M_IT_TB_1' }, // 37
  { value: '0x26', name: 'Event of protection equipment with time tag CP56Time2a (0x26)', tag: 'M_EP_TD_1' }, // 38
  { value: '0x27', name: 'Packed start events of protection equipment with time tag CP56time2a (0x27)', tag: 'M_EP_TE_1' }, // 39
  { value: '0x28', name: 'Packed output circuit information of protection equipment with time tag CP56Time2a (0x28)', tag: 'M_EP_TF_1' }, // 40

  { value: '0x2D', name: 'Single command (0x2D)', tag: 'C_SC_NA_1' }, // 45
  { value: '0x2E', name: 'Double command (0x2E)', tag: 'C_DC_NA_1' }, // 46
  { value: '0x2F', name: 'Regulating step command (0x2F)', tag: 'C_RC_NA_1' }, // 47
  { value: '0x30', name: 'Setpoint command, normalized value (0x30)', tag: 'C_SE_NA_1' }, // 48
  { value: '0x31', name: 'Setpoint command, scaled value (0x31)', tag: 'C_SE_NB_1' }, // 49
  { value: '0x32', name: 'Setpoint command, short floating point value (0x32)', tag: 'C_SE_NC_1' }, // 50
  { value: '0x33', name: 'Bit string  32 bit (0x33)', tag: 'C_BO_NA_1' }, // 51

  { value: '0x3A', name: 'Single command with time tag CP56Time2a (0x3A)', tag: 'C_SC_TA_1' }, // 58
  { value: '0x3B', name: 'Double command with time tag CP56Time2a (0x3B)', tag: 'C_DC_TA_1' }, // 59
  { value: '0x3C', name: 'Regulating step command with time tag CP56Time2a (0x3C)', tag: 'C_RC_TA_1' }, // 60
  { value: '0x3D', name: 'Setpoint command, normalized value with time tag CP56Time2a (0x3D)', tag: 'C_SE_TA_1' }, // 61
  { value: '0x3E', name: 'Setpoint command, scaled value with time tag CP56Time2a (0x3E)', tag: 'C_SE_TB_1' }, // 62
  { value: '0x3F', name: 'Setpoint command, short floating point value with time tag CP56Time2a (0x3F)', tag: 'C_SE_TC_1' }, // 63
  { value: '0x40', name: 'Bit string 32 bit with time tag CP56Time2a (0x40)', tag: 'C_BO_TA_1' }, // 64

  { value: '0x46', name: 'End of initialization (0x46)', tag: 'M_EI_NA_1' }, // 70

  { value: '0x64', name: '(General-) Interrogation command (0x64)', tag: 'C_IC_NA_1' }, // 100
  { value: '0x65', name: 'Counter interrogation command (0x65)', tag: 'C_CI_NA_1' }, // 101
  { value: '0x66', name: 'Read command (0x66)', tag: 'C_RD_NA_1' }, // 102
  { value: '0x67', name: 'Clock synchronization command (0x67)', tag: 'C_CS_NA_1' }, // 103
  { value: '0x68', name: '(IEC 101) Test command (0x68)', tag: 'C_TS_NB_1' }, // 104
  { value: '0x69', name: 'Reset process command (0x69)', tag: 'C_RP_NA_1' }, // 105
  { value: '0x6A', name: '(IEC 101) Delay acquisition command (0x6A)', tag: 'C_CD_NA_1' }, // 106
  { value: '0x6B', name: 'Test command with time tag CP56Time2a (0x6B)', tag: 'C_TS_TA_1' }, // 107

  { value: '0x6E', name: 'Parameter of measured value, normalized value (0x6E)', tag: 'P_ME_NA_1' }, // 110
  { value: '0x6F', name: 'Parameter of measured value, scaled value (0x6F)', tag: 'P_ME_NB_1' }, // 111
  { value: '0x70', name: 'Parameter of measured value, short floating point value (0x70)', tag: 'P_ME_NC_1' }, // 112
  { value: '0x71', name: 'Parameter activation (0x71)', tag: 'P_AC_NA_1' }, // 113

  { value: '0x78', name: 'File ready (0x78)', tag: 'F_FR_NA_1' }, // 120
  { value: '0x79', name: 'Section ready (0x79)', tag: 'F_SR_NA_1' }, // 121
  { value: '0x7A', name: 'Call directory, select file, call file, call section (0x7A)', tag: 'F_SC_NA_1' }, // 122
  { value: '0x7B', name: 'Last section, last segment (0x7B)', tag: 'F_LS_NA_1' }, // 123
  { value: '0x7C', name: 'Ack file, Ack section (0x7C)', tag: 'F_AF_NA_1' }, // 124
  { value: '0x7D', name: 'Segment (0x7D)', tag: 'F_SG_NA_1' }, // 125
  { value: '0x7E', name: 'Directory (0x7E)', tag: 'F_DR_TA_1' }, // 126
  { value: '0x7F', name: 'QueryLog ¨C Request archive file (0x7F)', tag: 'F_SC_NB_1' } // 127
]
