const dateArr = [{
    id: 0,
    label: '年月',
    key: 'yearMonth',
    type: 'date',
    width: '120px'
  },
  {
    id: 71,
    label: '开始时间',
    key: 'startTime',
    type: 'date',
    width: '120px'
  },
  {
    id: 73,
    label: '结束时间',
    key: 'endTime',
    type: 'date',
    width: '120px'
  },
  {
    id: 73,
    label: '年月',
    key: 'yearAndMonth',
    type: 'date',
    width: '120px'
  },
  {
    id: 74,
    label: '年度',
    key: 'yearNoMonth',
    type: 'date',
    dateType: 'year',
    width: '120px'
  },
];
const yearDateArr = [{
    id: 100,
    label: '开始时间',
    key: 'startyear',
    type: 'dateYear',
    dateType: 'year',
    width: '120px',
    defaultValue: new Date()
  },
  {
    id: 99,
    label: '结束时间',
    key: 'endyear',
    type: 'dateYear',
    dateType: 'year',
    width: '120px',
    defaultValue: new Date()
  }
];
const onlyDateArr = [{
  id: 77,
  label: '截至时间',
  key: 'endTime',
  type: 'onlyDate',
  width: '120px'
}, ];
const inputArr = [{
    id: 174,
    key: 'fileName',
    label: '图片名称',
    type: 'input',
    width: '120px'
  },
  {
    id: 400,
    key: 'parentCode',
    label: '父级编号',
    type: 'input',
    width: '120px'
  },
  {
    id: 173,
    key: 'title',
    label: '标题',
    type: 'input',
    width: '120px'
  },
  {
    id: 171,
    key: 'contactPerson',
    label: '联系人',
    type: 'input',
    width: '120px'
  },
  {
    id: 167,
    label: '住户名称',
    key: 'houseHolderName',
    type: 'input',
    width: '120px'
  },
  {
    id: 168,
    label: '住户名称',
    key: 'householderName',
    type: 'input',
    width: '120px'
  },
  {
    id: 166,
    label: '流程设置',
    key: 'nodeSetting',
    type: 'span',
    formWidth: '100%',
    disabled: true,
    hasSlot: true
  },
  {
    id: 162,
    label: '类型名称',
    key: 'itemName',
    type: 'input',
    width: '120px',
    required: true,
    formWidth: '472px'
  },
  {
    id: 147,
    label: '单位',
    key: 'org',
    type: 'input',
    width: '120px'
  },
  {
    id: 133,
    label: '缴费人',
    key: 'payerId',
    type: 'input',
    width: '120px'
  },
  {
    id: 130,
    label: '街区',
    key: 'avenue',
    type: 'input',
    width: '120px'
  },
  {
    id: 131,
    label: '楼号',
    key: 'floorNum',
    type: 'input',
    width: '120px'
  },
  {
    id: 1,
    label: '表计编号',
    key: 'meterCode',
    type: 'input',
    width: '120px'
  },
  {
    id: 12,
    label: '房屋编号',
    key: 'houseCode',
    type: 'input',
    width: '120px',
  },
  {
    id: 13,
    label: '姓名',
    key: 'hname',
    type: 'input',
    width: '120px',
    required: true
  },
  {
    id: 55,
    label: '倍率',
    key: 'multiplyingPower',
    type: 'input',
    width: '120px'
  },
  {
    id: 56,
    label: '安装地点',
    key: 'position',
    type: 'input',
    width: '120px'
  },
  {
    id: 57,
    label: '出厂编号',
    key: 'factorySn',
    type: 'input',
    width: '120px'
  },

  {
    id: 58,
    label: '电话',
    key: 'mphone',
    type: 'input',
    isTelephone: true,
    required: true
  },
  {
    id: '59',
    label: '社保编号',
    key: 'securityNumber',
    type: 'input',
    width: '120px'
  },
  {
    id: 14,
    label: '操作人员',
    key: 'operator',
    type: 'input',
    width: '120px'
  },
  {
    id: 24,
    label: '缴费人',
    key: 'payerName',
    type: 'input',
    width: '120px',
    required: true,
    hasSlot: true,
    formWidth: '120px'
  },
  {
    id: 25,
    label: '单位名称',
    key: 'orgName',
    type: 'input',
    width: '120px',
    hasSlot: false,
    required: true
  },
  {
    id: 34,
    label: '用户名称',
    key: 'userName',
    type: 'input',
    width: '120px',
  },
  {
    id: 35,
    label: '房屋地址',
    key: 'homeaddress',
    type: 'input',
    width: '120px',
  },
  {
    id: 36,
    label: '单位名称',
    key: 'enterpriseName',
    type: 'input',
    width: '120px',
  },
  {
    id: 40,
    label: '房屋描述',
    key: 'description',
    type: 'input',
    width: '396px',
    formWidth: '472px',
    disabled: true
  },
  {
    id: 41,
    label: '采暖面积',
    key: 'heatArea',
    type: 'inputNumber',
    width: '120px',
    required: true
  },
  {
    id: 42,
    label: '入住人数',
    key: 'personNums',
    type: 'inputNumber',
    width: '120px',
    required: true
  },
  {
    id: 43,
    label: '电读数',
    key: 'eleInsReading',
    type: 'input',
    width: '120px',
  },
  {
    id: 44,
    label: '水读数',
    key: 'waterInsReading',
    type: 'input',
    width: '120px',
  },
  {
    id: 45,
    label: '气读数',
    key: 'gasInsReading',
    type: 'input',
    width: '120px',
  },
  {
    id: 46,
    label: '备注',
    key: 'memo',
    type: 'input',
    formWidth: '472px',
  },
  {
    id: 36,
    label: '表计编号',
    key: 'code',
    type: 'input',
    width: '120px',
  },
  {
    id: 37,
    label: '名称',
    key: 'taskName',
    type: 'input',
    width: '120px'
  },
  {
    id: 53,
    label: '表计编号',
    key: 'meterNumber',
    type: 'input',
    width: '120px',
  },
  {
    id: 47,
    label: '单位编号',
    key: 'orgCode',
    type: 'input',
    required: true,
    hasSlot: false
  },
  {
    id: 48,
    label: '单位简称',
    key: 'briefName',
    type: 'input',
    hasSlot: false
  },
  {
    id: 37,
    label: '临近巡检',
    key: 'checkDays',
    type: 'input',
    width: '120px'
  },
  {
    id: 38,
    label: '临近巡检',
    key: 'checkDateDays',
    type: 'input',
    width: '120px'
  },
  {
    id: 65,
    label: '网损系统',
    key: 'netSysName',
    type: 'input',
    width: '120px'
  },
];
const btnArr = [{
    id: 101,
    label: '打印',
    key: 'print',
    type: 'btn',
    width: '64px',
  },
  {
    id: 405,
    label: '查询',
    key: 'remoteMeterReading',
    type: 'btn',
  },
  {
    id: 521,
    label: '工业用能抄表核对',
    key: 'checkSearchMeterReading',
    type: 'btn',
  },
  {
    id: 103,
    label: '打印抄表单',
    key: 'printtable',
    type: 'btn',
  },
  {
    id: 104,
    label: '打印抄表单',
    key: 'printReadingtable',
    type: 'btn',
  },
  {
    id: 1,
    label: '纠错',
    key: 'correction',
    type: 'btn',
    width: '64px',
  },
  {
    id: 2,
    label: '查询',
    key: 'query',
    type: 'btn',
    width: '64px',
  },
  {
    id: 2,
    label: '查询',
    key: 'handQuery',
    type: 'btn',
    width: '64px',
  },
  {
    id: 3,
    label: '重置',
    key: 'reset',
    type: 'btn',
    width: '64px'
  },
  {
    id: 4,
    label: '打印表单',
    key: 'printForm',
    type: 'btn',
    width: '110px'
  },
  {
    id: 5,
    label: '导出',
    key: 'export',
    type: 'btn',
    width: '64px'
  },
  {
    id: 5,
    label: '导出',
    key: 'fontExport',
    type: 'btn',
    width: '64px'
  },
  {
    id: 6,
    label: '上报',
    key: 'report',
    type: 'btn',
    width: '64px'
  },
  {
    id: 7,
    label: '导入',
    key: 'import',
    type: 'btn',
    width: '64px'
  },
  {
    id: 8,
    label: '抄表',
    key: 'meterRead',
    type: 'btn',
    width: '64px'
  },
  {
    id: 20,
    label: '新增',
    key: 'add',
    type: 'btn',
  },
  {
    id: 30,
    label: '删除',
    key: 'delete',
    type: 'btn',
    width: '64px'
  },
  {
    id: 31,
    label: '批量删除',
    key: 'messDelete',
    type: 'btn',
    width: '120px'
  },
  {
    id: 32,
    label: '审批',
    key: 'approve',
    type: 'btn',
    width: '64px'
  },
  {
    id: 33,
    label: '新增',
    key: 'addIndustrialMeter',
    type: 'btn',
    width: '64px',
  },
  {
    id: 33,
    label: '新增单位组',
    key: 'addModelGroup',
    type: 'btn',
    width: '120px',
  },
  {
    id: 34,
    label: '新增',
    key: 'addResidentialMeter',
    type: 'btn',
    width: '64px',
  },
  {
    id: 35,
    label: '抄表',
    key: 'addResidentialMeterReading',
    type: 'btn',
    width: '64px',
  },
  {
    id: 57,
    label: '导出',
    key: 'exportInFront',
    type: 'btn',
    width: '64px',
  },
  {
    id: 69,
    label: '审核',
    key: 'addIndustrialVerification',
    type: 'btn',
    width: '64px',
  },
  {
    id: 70,
    label: '审核',
    key: 'addResidentialVerification',
    type: 'btn',
    width: '64px',
  },
  {
    id: 66,
    label: '抄表',
    key: 'addIndustrialMeterReading',
    type: 'btn',
    width: '64px',
  },
  {
    id: 67,
    label: '模板下载',
    key: 'modelDownload',
    type: 'btn',
    width: '120px',
  },
  {
    id: 68,
    label: '批量修改',
    key: 'batchChange',
    type: 'btn',
    width: '90px',
  },
  {
    id: 81,
    label: '新增归零',
    key: 'addMeterToZero',
    type: 'btn',
    width: '90px',
  },
  {
    id: 82,
    label: '收款',
    key: 'collectionMoney',
    type: 'btn',
    width: '60px',
  },
  {
    id: 83,
    label: '新增申请',
    key: 'addApplyRefuse',
    type: 'btn',
    width: '90px',
  },
  {
    id: 84,
    label: '新增申请',
    key: 'addApplyRefuseIndustrial',
    type: 'btn',
    width: '90px',
  },
  {
    id: 85,
    label: '新增',
    key: 'addRecordSupplementIndustrial',
    type: 'btn',
    width: '60px'
  },
  {
    id: 177,
    label: '查询',
    key: 'massDeleteQuery',
    type: 'btn',
    width: '64px',
  },
  {
    id: 66,
    label: '抄表',
    key: 'addWaterVirtualMeterReading',
    type: 'btn',
    width: '64px',
  },
];
const searchBoxArr = [{
    id: 132,
    label: '所属单位',
    key: 'enterpriseId',
    type: 'searchBox',
    width: '195px',
    queryMethod: 'getAllPersonOrgList'
  },
  {
    id: 132,
    label: '所属单位',
    key: 'enterpriseOriId',
    type: 'searchBox',
    width: '195px',
    queryMethod: 'getAllIndustryOrgList'
  },
  {
    id: 421,
    label: '所属区域',
    key: 'districtId',
    type: 'searchBox',
    width: '120px',
    queryMethod: 'queryMeterReadArea',
    params: {
      parentId: '0'
    }
  },
];
const searchBoxMultiArr = [{
    id: 132,
    label: '所属单位',
    key: 'enterpriseId',
    type: 'searchBoxMulti',
    width: '195px',
    queryMethod: 'getAllIndustryOrgList',
    defaultValue: []
  },
  {
    id: 654,
    type: 'searchBoxMulti',
    key: 'orgId',
    label: '单位',
    width: '195px',
    queryMethod: 'getAllPersonOrgList'
  },
  {
    id: 523,
    label: '表计编号',
    key: 'meterId',
    type: 'searchBoxMulti',
    width: '300px',
    isRemoteSearch: true,
    defaultValue: [],
    options: []
  },
];
const sltArr = [{
    id: 170,
    label: '网损分类',
    key: 'netTypeId',
    type: 'slt',
    width: '120px',
    options: []
  },
  {
    id: 169,
    label: '网损系统',
    key: 'netSysId',
    type: 'slt',
    width: '120px',
    options: []
  },
  {
    id: 410,
    label: '是否空房',
    key: 'vac',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'yes',
        label: '是'
      },
      {
        value: 'no',
        label: '否'
      }
    ]
  },
  {
    id: 510,
    label: '是否统一出账',
    key: 'unifiedBill',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'yes',
        label: '是'
      },
      {
        value: 'no',
        label: '否'
      }
    ]
  },
  {
    id: 165,
    label: '处理状态',
    key: 'states',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'FWT_SL',
        label: '服务台受理'
      },
      {
        value: 'FZR_DCL',
        label: '分派待接单'
      },
      {
        value: 'FP_DJD',
        label: '服务台受理'
      },
      {
        value: 'WX_CHZ',
        label: '维修处理中'
      },
      {
        value: 'FZR_GBSQ',
        label: '负责人关闭申请'
      },
      {
        value: 'CLJG_DQR',
        label: '处理结果待确认'
      },
      {
        value: 'YH_DPJ',
        label: '用户待评价'
      },
      {
        value: 'SCB_XT',
        label: '生产协调'
      },
      {
        value: 'KF_DHF',
        label: '客服待回访'
      },
      {
        value: 'KF_JGGZ',
        label: '结果待告知'
      },
      {
        value: 'CL_END',
        label: '处理完成'
      },
    ],
  },
  {
    id: 165,
    label: '类型',
    key: 'orderSubType',
    type: 'slt',
    options: [{
        value: 'complain',
        label: '意见'
      },
      {
        value: 'suggest',
        label: '建议'
      }
    ],
    width: '120px',
    required: true
  },
  {
    id: 164,
    label: '故障类型',
    key: 'energyTypeItemId',
    type: 'slt',
    width: '120px',
    queryMethod: 'getEnergyOption',
    params: 'energyType',
    required: true
  },
  {
    id: 163,
    label: '报修类型',
    key: 'repairTypeItemId',
    type: 'slt',
    width: '120px',
    queryMethod: 'getRepairOptionList',
    params: 'repairType',
    required: true
  },
  {
    id: 153,
    label: '缴费状态',
    key: 'billStatus',
    type: 'slt',
    options: [{
        value: 'Paid',
        label: '缴清'
      },
      {
        value: 'Overdue',
        label: '欠缴'
      },
      {
        value: 'Dishonour',
        label: '拒付'
      },
    ]
  },
  {
    id: 154,
    label: '缴费方式',
    key: 'payStatus',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'WeChatPay',
        label: '微信缴费'
      },
      {
        value: 'DeductPay',
        label: '预交费扣除'
      },
      {
        value: 'CashPay',
        label: '现金'
      },
      {
        value: 'CardPay',
        label: '刷卡'
      },
      {
        value: 'BankPay',
        label: '银行托收'
      },
      {
        value: 'PhonePay',
        label: '手机支付'
      }
    ]
  },
  {
    id: 155,
    label: '开始年份',
    key: 'startyear',
    type: 'slt',
    options: []
  },
  {
    id: 156,
    label: '结束年份',
    key: 'endyear',
    type: 'slt',
    options: []
  },
  {
    id: 156,
    label: '年月',
    key: 'queryDate',
    type: 'slt',
    options: []
  },
  {
    id: 152,
    label: '事件类型',
    key: 'eventType',
    type: 'slt',
    options: [{
        value: 'all',
        label: '全部'
      },
      {
        value: 'normal',
        label: '缴费'
      },
      {
        value: 'stopSupply',
        label: '水电器扣除'
      },
      {
        value: 'refund',
        label: '退款'
      }
    ]
  },
  {
    id: 151,
    label: '供能状态',
    key: 'supplyStatus',
    type: 'slt',
    options: [{
        value: 'all',
        label: '全部'
      },
      {
        value: 'normal',
        label: '正常'
      },
      {
        value: 'stopSupply',
        label: '已停供'
      }
    ]
  },
  {
    id: 150,
    label: '是否欠费',
    key: 'isOweFee',
    type: 'slt',
    options: [{
        value: 'all',
        label: '全部'
      },
      {
        value: 'yes',
        label: '是'
      },
      {
        value: 'no',
        label: '否'
      }
    ]
  },
  {
    id: 146,
    label: '补收类型',
    key: 'tonicReceiveType',
    type: 'slt',
    options: []
  },
  {
    id: 145,
    label: '数据来源',
    key: 'dataSource',
    type: 'slt',
    options: [{
        value: 'manual',
        label: '抄表员添加'
      },
      {
        value: 'intelli',
        label: '智能表计上传'
      },
      {
        value: 'userreport',
        label: '用户上报'
      }
    ]
  },
  {
    id: 144,
    label: '是否有效',
    key: 'validFlag',
    type: 'slt',
    width: '100px',
    options: [{
        value: 'yes',
        label: '有效'
      },
      {
        value: 'no',
        label: '无效'
      }
    ]
  },
  {
    id: 140,
    label: '审批状态',
    key: 'auditStates',
    type: 'slt',
    options: [{
        value: 'KEBAO_AUDIT',
        label: '科保审核'
      },
      {
        value: 'KEBAO_APPROVAL',
        label: '科保审批'
      },
      {
        value: 'AUDIT_REJECT',
        label: '科保审核异常'
      },
      {
        value: 'APPROVAL_PASS',
        label: '科保审批通过'
      },
      {
        value: 'APPROVAL_REJECT',
        label: '科保审批异常'
      }
    ],
    width: '120px'
  },
  {
    id: 122,
    label: '变更类型',
    key: 'intoStatus',
    type: 'slt',
    options: [{
        value: 'into',
        label: '搬入'
      },
      {
        value: 'out',
        label: '搬出'
      }
    ],
    required: true
  },
  {
    id: 99,
    label: '状态',
    key: 'sendStatus',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'NoSend',
        label: '未发送',
      },
      {
        value: 'HasSend',
        label: '已发送',
      }
    ]
  },
  {
    id: 96,
    label: '通知类型',
    key: 'modelType',
    type: 'slt',
    width: '120px',
    queryMethod: 'getModelNoticeList'
  },
  {
    id: 102,
    label: '审批异常',
    key: 'revokeAbnormal',
    type: 'slt',
    options: [{
        value: 'all',
        label: '全部'
      },
      {
        value: 'normal',
        label: '正常'
      },
      {
        value: 'abnormal',
        label: '异常'
      }
    ]
  },
  {
    id: 34,
    label: '补收类型',
    key: 'refundTypeEnum',
    type: 'slt',
    queryMethod: 'getIndustrialRefundType'
  },
  {
    id: 32,
    label: '补收类型',
    key: 'pillTEnum',
    type: 'slt',
    queryMethod: 'getIndustrialRefundType'
  },
  {
    id: 9,
    label: '能源类型',
    key: 'paymentItem',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'Hydroenergy',
        label: '水'
      },
      {
        value: 'ElectricalEnergy',
        label: '电'
      },
      {
        value: 'NaturalGas',
        label: '天然气'
      },
      {
        value: 'Vapour',
        label: '蒸汽'
      }
    ]
  },
  {
    id: 9,
    label: '能源类型',
    key: 'energyTypeEnum1',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'Hydroenergy',
        label: '水'
      },
      {
        value: 'ElectricalEnergy',
        label: '电'
      },
      {
        value: 'NaturalGas',
        label: '天然气'
      },
      {
        value: 'Vapour',
        label: '蒸汽'
      }
    ]
  },
  {
    id: 9,
    label: '能源类型',
    key: 'energytypeName',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'Hydroenergy',
        label: '水'
      },
      {
        value: 'WasteHydroenergy',
        label: '污水处理'
      },
      {
        value: 'ElectricalEnergy',
        label: '电'
      },
      {
        value: 'NaturalGas',
        label: '天然气'
      },
      {
        value: 'Vapour',
        label: '蒸汽'
      },
    ]
  },
  {
    id: 9,
    label: '能源类型',
    key: 'energyType',
    type: 'slt',
    width: '120px',
    // options: [
    //   {
    //     value: 'Hydroenergy',
    //     label: '水'
    //   },
    //   {
    //     value: 'ElectricalEnergy',
    //     label: '电'
    //   },
    //   {
    //     value: 'NaturalGas',
    //     label: '天然气'
    //   },
    //   {
    //     value: 'Vapour',
    //     label: '蒸汽'
    //   }
    // ]
  },
  {
    id: 11,
    label: '通知类型',
    key: 'msgType',
    type: 'slt',
    width: '150px',
    options: [{
        label: '一般通知',
        value: 'GeneralNotice'
      },
      {
        label: '抄表数据上报通知',
        value: 'MeterReadingReport'
      },
      {
        label: '停供通知',
        value: 'StopNotice'
      }
    ]
  },
  {
    id: 16,
    label: '楼号',
    key: 'buildId',
    type: 'slt',
    width: '120px'
  },
  {
    id: 17,
    label: '环比开始月份',
    key: 'startmonth',
    type: 'slt',
    width: '120px',
    options: []
  },
  {
    id: 25,
    label: '环比结束月份',
    key: 'endmonth',
    type: 'slt',
    width: '120px',
    options: []
  },
  {
    id: 18,
    label: '校验结果',
    key: 'checkResult',
    type: 'slt',
    width: '120px',
    options: [{
      label: '正常',
      value: 'Normal'
    }, {
      label: '异常',
      value: 'AbNormal'
    }]
  },
  {
    id: 19,
    label: '校验人',
    key: 'checkUserId',
    type: 'slt',
    width: '120px',
    queryMethod: 'queryAllMeterReaderList'
  },
  {
    id: 21,
    label: '所属区域',
    key: 'districtId',
    type: 'slt',
    width: '120px',
    queryMethod: 'queryMeterReadArea',
    params: {
      parentId: '0'
    }
  },
  {
    id: 22,
    label: '代缴单位',
    key: 'payerOrganizationId',
    relateKey: 'paymentOrganizationName',
    width: '120px',
    type: 'searchBox',
    queryMethod: 'getAllPersonOrgList',
    required: true
  },
  {
    id: 23,
    label: '缴费类型',
    key: 'payType',
    type: 'slt',
    width: '120px',
    queryMethod: 'getPayTypeOptions',
  },
  {
    id: 26,
    label: '单位性质',
    key: 'orgType',
    type: 'slt',
    width: '120px',
    required: true,
    queryMethod: 'getOrgTypeOptions',
    hasSlot: false
  },
  {
    id: 27,
    label: '参与汇总',
    key: 'sumFlag',
    type: 'slt',
    width: '120px',
    queryMethod: 'getWhetherOptions',
    hasSlot: false,
  },
  {
    id: 28,
    label: '抄表状态',
    key: 'meterReadStatus',
    type: 'slt',
    width: '120px'
  },
  {
    id: 401,
    label: '是否计费',
    key: 'feeChargeFlag',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'yes',
        label: '是'
      },
      {
        value: 'no',
        label: '否'
      }
    ]
  },
  {
    id: 402,
    label: '有无子表',
    key: 'childFlag',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'yes',
        label: '是'
      },
      {
        value: 'no',
        label: '否'
      }
    ]
  },
  {
    id: 29,
    label: '启用状态',
    key: 'enableFlag',
    type: 'slt',
    width: '120px',
    defaultValue: 'enable',
    options: [{
        value: 'enable',
        label: '是'
      },
      {
        value: 'disable',
        label: '否'
      }
    ]
  },
  {
    id: 200,
    label: '启用状态',
    key: 'status',
    type: 'slt',
    width: '120px',
  },
  {
    id: 31,
    label: '审核状态',
    key: 'reviewStatus',
    type: 'slt',
    width: '120px'
  },
  {
    id: 35,
    label: '抄表类型',
    key: 'used',
    type: 'slt',
    width: '120px',
    options: [{
        value: 1,
        label: '工业',
      },
      {
        value: 2,
        label: '住宅'
      }
    ]
  },
  {
    id: 38,
    label: '使用状态',
    key: 'useStatus',
    type: 'slt',
    width: '120px',
  },
  {
    id: 39,
    label: '抄表员',
    key: 'useStatus',
    type: 'slt',
    width: '120px',
    queryMethod: 'queryAllMeterReaderList'
  },
  {
    id: 40,
    label: '启用状态',
    key: 'merterStatus',
    type: 'slt',
    width: '120px',
  },
  {
    id: 50,
    label: '上级单位',
    key: 'parentOrganizationId',
    relateKey: 'parentOrganizationName',
    type: 'searchBox',
    queryMethod: 'getOrgParentCodeList',
    needPathParam: true,
    hasSlot: false,
  },
  {
    id: 54,
    label: '打印四联',
    key: 'printFlag',
    type: 'slt',
    hasSlot: false,
    queryMethod: 'getWhetherOptions',
    defaultValue: 'no'
  },
  {
    id: 55,
    label: '单位特性',
    key: 'orgChar',
    type: 'slt',
    queryMethod: 'getOrgCharOptions',
    required: true
  },
  {
    id: 57,
    label: '状态',
    key: 'workStatus',
    type: 'slt',
    width: '120px',
    queryMethod: 'getUserWorkStatusOptions',
    defaultValue: 'zaizhi'
  },
  {
    id: 60,
    label: '工作单位',
    key: 'organizationId',
    relateKey: 'organizationName',
    type: 'searchBox',
    queryMethod: 'getAllPersonOrgList',
    required: true
  },
  {
    id: 62,
    key: 'spouseorganizationId',
    label: '配偶工作单位',
    relateKey: 'spouseorganizationName',
    type: 'searchBox',
    queryMethod: 'getAllPersonOrgList',
  },
  {
    id: 64,
    key: 'invoiceType',
    label: '发票类型',
    type: 'slt',
    queryMethod: 'getInvoiceTypeOptions',
    width: '120px',
    defaultValue: 'general'
  },
  {
    id: 58,
    label: '年',
    key: 'recordYear',
    type: 'slt',
    width: '80px',
    options: []
  },
  {
    id: 59,
    label: '月',
    key: 'recordMonth',
    type: 'slt',
    width: '60px',
    options: []
  },
  {
    id: 60,
    label: '所属单位',
    key: 'enterpriseId',
    type: 'treeSelect',
    width: '120px',
    queryMethod: "getIndustrialTopAreaList"
  },
  {
    id: 78,
    label: '所属单位',
    key: 'enterpriseOriId',
    type: 'treeSelect',
    width: '120px',
    queryMethod: "getIndustrialTopAreaList"
  },
  {
    id: 61,
    label: '数据状态',
    key: 'resultFlag',
    type: 'slt',
    width: '120px',
    defaultValue: 'yes',
    options: [{
        value: 'pass',
        label: '已通过'
      },
      {
        value: 'remoteFail',
        label: '远传失败'
      },
      {
        value: 'read',
        label: '已抄表'
      },
      {
        value: 'reported',
        label: '已上传'
      },
      {
        value: 'abnormal',
        label: '异常'
      },
      {
        value: 'tobeset',
        label: '待定'
      }
    ]
  },
  {
    id: 62,
    label: '年度',
    key: 'year',
    type: 'slt',
    width: '80px',
    options: [],
  },
  {
    id: 63,
    label: '月份',
    key: 'month',
    type: 'slt',
    width: '80px',
    options: [],
  },
  {
    id: 64,
    label: '表计类型',
    key: 'meterType',
    type: 'slt',
    width: '120px',
    options: [{
      label: '',
      value: 'All'
    }, {
      label: '住宅表计',
      value: 'HouseMeter'
    }, {
      label: '工业表计',
      value: 'IndustrialMeter'
    }, {
      label: '总表表计',
      value: 'TotalMeter'
    }]
  },
  {
    id: 66,
    label: '单位',
    key: 'enterPriseOrgId',
    type: 'treeSelect',
    width: '120px',
    queryMethod: "getIndustrialTopAreaList"
  },
  {
    id: 74,
    label: '抄表方式',
    key: 'meterReadingType',
    type: 'slt',
    width: '120px',
    options: [{
      label: '手动抄表',
      value: 'HouseMeter'
    }, {
      label: '用户上传',
      value: 'userMeter'
    }, {
      label: '远程抄表',
      value: 'Meter'
    }]
  },
  {
    id: 75,
    label: '数据状态',
    key: 'result',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'noapproval',
        label: '未审批'
      },
      {
        value: 'pass',
        label: '通过'
      },
      {
        value: 'notpass',
        label: '未通过'
      }
    ]
  },
  {
    id: 76,
    label: '数据状态',
    key: 'resultFlag',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'pass',
        label: '已抄表'
      },
      {
        value: 'abnormal',
        label: '异常'
      },
      {
        value: 'tobeset',
        label: '待定'
      }
    ]
  },
  {
    id: 77,
    label: '缴费状态',
    key: 'paymentStatus',
    type: 'slt',
    width: '120px',
    options: [{
        value: 'inNet',
        label: '线上充值'
      },
      {
        value: 'outNet',
        label: '线下缴费'
      }, {
        value: 'all',
        label: '全部'
      }
    ]
  },
  {
    id: 79,
    label: '缴费方式',
    key: 'paymentMethod',
    type: 'slt',
    width: '120px',
    options: [{
      value: 'all',
      label: '全部'
    }]
  },
  {
    id: 80,
    label: '单位',
    key: 'organization',
    relateKey: 'paymentOrganizationName',
    width: '120px',
    type: 'searchBox',
    queryMethod: 'getAllPersonOrgList',
    required: true
  },
  {
    id: 81,
    label: '开始时间',
    key: 'startTime',
    type: 'slt',
    width: '120px'
  },
  {
    id: 82,
    label: '结束时间',
    key: 'endTime',
    type: 'slt',
    width: '120px'
  },
];
const doubleInputArr = [{
    id: 49,
    label: '费用',
    key: 'bill',
    type: 'doubleInput',
    width: '100px',
  },
  {
    id: 49,
    label: '倍率',
    key: 'ratio',
    type: 'doubleInput',
    width: '100px',
  },
  {
    id: 403,
    label: '用量范围',
    key: 'used',
    type: 'doubleInput',
    width: '100px',
  },
  {
    id: 42,
    label: '起始读数',
    key: 'startNum',
    type: 'doubleInput',
    width: '100px',
  },
  {
    id: 73,
    label: '上月读数',
    key: 'fromNumber',
    type: 'doubleInput',
    width: '100px',
  },
  {
    id: 74,
    label: '本月读数',
    key: 'endNumber',
    type: 'doubleInput',
    width: '100px',
  },
  {
    id: 75,
    label: '耗费范围',
    key: 'usedNumber',
    type: 'doubleInput',
    width: '100px',
  },
  {
    id: 100,
    label: '费用合计',
    key: 'startTotal',
    type: 'doubleInput',
    width: '80px'
  },
  {
    id: 110,
    label: '水用量',
    key: 'startHydroenergyUsed',
    type: 'doubleInput',
    width: '80px'
  },
  {
    id: 111,
    label: '电用量',
    key: 'startElectricalEnergyUsed',
    type: 'doubleInput',
    width: '80px'
  },
  {
    id: 112,
    label: '气用量',
    key: 'startNaturalGasUsed',
    type: 'doubleInput',
    width: '80px'
  }
];
const doubleTimeArr = [{
    id: 43,
    label: '启用时间',
    key: 'startUsingTime',
    type: 'doubleTime',
    width: '120px'
  },
  {
    id: 141,
    label: '时间范围',
    key: 'allTimeToSplitList',
    type: 'doubleTime',
    dateType: 'month',
    width: '120px'
  },
  {
    id: 741,
    type: 'doubleTime',
    key: 'rangeSplitTime',
    label: '年月',
    dateType: 'month',
    width: '120px',
    defaultValue: new Date(),
    defaultValueEnd: new Date(),
    clearable: true,
    clearableEnd: true
  },
  {
    id: 141,
    label: '时间',
    key: 'time',
    type: 'doubleTime',
    width: '120px'
  },
  {
    id: 159,
    label: '时间',
    key: 'rangeTime',
    type: 'doubleTime',
    dateType: 'month',
    width: '120px'
  }
];
const buttonList = {
  'date': dateArr,
  'input': inputArr,
  'slt': sltArr,
  'btn': btnArr,
  'onlyDate': onlyDateArr,
  'doubleInput': doubleInputArr,
  'doubleTime': doubleTimeArr,
  'searchBox': searchBoxArr,
  'yearDate': yearDateArr,
  'searchBoxMulti': searchBoxMultiArr
};
const queryMethod = {
  'meterReaderManagement-query': 'getMeteReadTableData',
  'totalMeter-query': 'getTotalMeterList',
  'residentialManagement-import': 'importHouseManageData',
  'residentialManagement-query': 'queryResidentialInfoTableData',
  'employeeManagement-query': 'queryOrgTableData',
  'employeeManagement-import': 'importOrgData',
  'industrialMeter-query': 'getIndustrialMeterTreeList',
  'residentialMeter-query': 'getResidentialMeterList',
  'userInformationManagement-query': 'queryPayerTableData',
  'userPhone-query': 'queryPayerTableData',
  'userInformationManagement-import': 'importHouseData',
  'energyUnitManagement-query': 'queryUseEnergyUnitTableData',
  'energyUnitManagement-import': 'importUseEnergyUnit',
  'residentialMeterReading-query': 'getResidentialMeterReadingList',
  'calibrationRecord-query': 'getCalibrationRecord',
  'calibrationRecord-import': 'importCalibrationRecord',
  'industrialDataCalculation-correction': 'getIndustrialDataCalculation',
  'industrialCalculation-query': 'getPayOutTableData',
  'residentialCalculation-query': 'getResidentPayOutTableData',
  'pathManagementMeterReading-query': 'getMeterReadingPathList',
  'specialSettingOfIndustrialChargeStandard-query': 'getSpecialSettingDanweiList',
  'industrialAlarmValueRatingSetting-query': 'getIndustrialAlarmList',
  'industrialVerification-query': 'getIndustrialMeterReadingRecordList',
  'residentBillDetails-query': 'viewResidentPayOutTableDataDetail',
  'industrialMeterReading-query': 'getIndustrialMeterReadingList',
  'categoriesManagement-query': 'getTypeManagementTableData',
  'reportComplaintPersonManagement-query': 'queryGuaranteeSuggestionTableData',
  'reportFaultConfigManagement-query': 'queryGuaranteeSuggestionTableData',
  'residentialHeating-query': 'getHeatingTableData',
  'residentialHeating-import': 'importHeatingTableData',
  'residentHeatingDetails-query': 'queryHeatingDetailTableDataByCondition',
  'maintainRegister-query': 'getMaintainTableData',
  'workbench-query': 'getWorkbenchTableData',
  'workOrderQuery-query': 'getMaintainTableData',
  'complaintsAndSuggestionsResigster-query': 'getComplainTableData',
  'complaintsAndSuggestionsSearch-query': 'getComplainTableData',
  'complaintsAndSuggestionsHandle-query': 'getComplainSugTableData',
  'userHeatingRefund-query': 'getUserHeatingRefundTableData',
  'userUsedEnergyRefund-query': 'getUserUsedEnergyTableData',
  'userThreeFeesRefund-query': 'getResidentThreeFeeTableData',
  'residentialEnergySupplementManagement-query': 'getPoillManagementList',
  'residentialReplenishSupplementManagement-query': 'getPoillBuLiangManagementList',
  'householdHeatingRefundSummary-query': 'getResidentHeatingTableData',
  'industrialEnergySupplementManagement-query': 'getIndustrialPoillManagementList',
  'userEnergyConsumptionRefusalManagement-query': 'getUserRefuseManagementList',
  'industrialRefusalPayManagement-query': 'getIndustrRefuseManagementList',
  'userHeatingConsumptionRefusalManagement-query': 'getHeatingRefuseManagementList',
  'industrialEnergyRevenue-query': 'getIndustrialRealRevenueDetail',
  'industryUsedEnergyRefund-query': 'getIndustryUsedEnergyTableData',
  'industryRefundTotal-query': 'getIndustryRefundTotalTableData',
  'industrialSupplementarySummary-query': 'getIndustrialBuLiangPoillManagement',
  'residentialEnergyRevenue-query': 'getResidentialRealRevenue',
  'industrialRefusalPaySummary-query': 'IndustrialRefuseTotalQuery',
  'residentialNonPaymentSummary-query': 'resdentialRefuseTotalQuery',
  'houseHeatingChargeManagement-query': 'residentialHeatingChargeManagement',
  'sporadicHeatingChargeManagement-query': 'lingxingHeatingChargeManagement',
  'sporadicChargesManagement-query': 'lingxingChargeManagement',
  'residentialComprehensiveInquiry-query': 'getResidentComprehensiveTableData',
  'detail-query-false': 'getResidentComprehensiveTableDataInfo',
  'detail-query-true': 'getIndustryComprehensiveTableDataInfo',
  'taxRateSetting-query': 'getTaxRateSettingTableData',
  'industrialComprehensiveInquiry-query': 'getIndustryComprehensiveTableData',
  'industrialMeterManyMonthsNoInfo-query': 'getIndustrialUnreadManyMonthList',
  'systemMeterStatistics-query': 'getSystemMeterList',
  'entOweFeeDetail-query': 'getEntOweFeeDetailTableData',
  'houseOweFeeDetail-query': 'getHouseOweFeeDetailTableData',
  'sporadicAdvancePaymentManagement-query-true': 'getPrepayAccountTableData',
  'sporadicAdvancePaymentManagement-query-false': 'getPrepayRecordTableData',
  'residentialMeterReading-export': 'exportResidentialMeterReading',
  'industrialMeterReading-export': 'exportIndustrialMeterReading',
  'houseHeatingReceivableSum-query': 'getHouseHeatingReceivableSumTableData',
  'houseHeatingFeeSum-query': 'getHouseHeatingFeeSumTableData',
  'houseHeatingFeeDetail-query': 'getHouseHeatingFeeDetail',
  'sporadicHeatingFeeDetail-query': 'getSporadicHeatingFeeDetail',
  'energyFeeMonthSum-query': 'getEnergyFeeMonthSumTableData',
  'energyFeeTaxMonthSum-query': 'getEnergyFeeMonthSumTableDataWithTax',
  'energyFeeYearSum-query': 'getEnergyFeeYearSumTableData',
  'houseReceivableSum-query': 'getHouseReceivableSumTableData',
  'sporadicFeeDetail-query': 'getSporadicFeeDetailTableData',
  'houseFeeDetail-query': 'getHouseFeeDetailTableData',
  'feeRecoveryRate-query': 'getCostRecoveryRateTableData',
  'energyConsumingCompanyAgingStatistics-query': 'energyConsumingCompanyAgingSearch',
  'energyTrendAnalysis-query': 'energyTrendAnalysisSearch',
  'chargingTimeForUnitHouseholdBilling-query': 'chargingTimeForUnitHouseholdBillingSearch',
  'sporadicHouseholdAgingStatistics-query': 'lingxingHouseageSearch',
  'energyConsumptionUnitComparison-query': 'energyUnitComparisonSearch',
  'energyConsumptionUnitConsumptionRatio-query': 'energySequentialComparisonSearch',
  'sporadicDetail-query': 'getComSporadicInfoTableData',
  'externalSupplyStatistics-query': 'externalSupplyStatisticsSearch',
  'transferStatistics-query': 'transferStatisticsSearch',
  'elecSystem-query': 'getEleSystemTableData',
  'waterSystem-query': 'getWaterSystemTableData',
  'gasSystem-query': 'getGasSystemTableData',
  'vapourSystem-query': 'getVapourSystemTableData',
  'summaryEntStaff-query': 'getEntEmployeeTableData',
  'summaryDistrictStaff-query': 'getDisEmployeeTableData',
  'industrialEnergyDetails-query': 'industrialEnergyDetailsSearch',
  'messageSendingRecord-query': 'getMsgRecordList',
  'waterUsageAccountManagement01-import': 'importWaterUsageTableData',
  'waterUsageAccountManagement01-query': 'getWaterUsageAccountTableData',
  'waterVirtualMeterReading-query': 'searchWatervirtualList',
  'intelligentMeterManagement-query': 'searchSmartMeterList',
  'powerGridLossMeterManagement-query': 'getEleNetLossMeterMgeTableData',
  'powerGridLossMeterManagement-modelDownload': 'powerGridLossSystemDownload',
  'powerGridLossMeterManagement-import': 'powerGridLossSystemImport',
  'eleNetLossDetail-query': 'getAllNetLossMeterById',
  'informationManagementNetworkLossMeter-query': 'getNetLossMeterInfoTableData',
  'powergridlossMeterReading-query': 'getEleNetLossMeterReadTableData',
  'waterVirtualMeterManagement-query': 'getWaterVirMeterTableData',
  'messageTemplateConfiguration-query': 'getMessageModelList',
  'StatisticsWaterConsumptionRecentThreeYears-query': 'getLastThreeWaterAmount',
  'elecNetLossAnalysis-query': 'getNetLossAnalysisTableDataNew',
  'gasNetLossAnalysis-query': 'getNetLossAnalysisTableDataNew',
  'waterNetLossAnalysis-query': 'getNetLossAnalysisTableDataNew',
  'netWorkLossDetail-query-ElectricalEnergy': 'getNetLossAnalysisTableDataDetail',
  'netWorkLossDetail-query-Hydroenergy': 'getNetLossAnalysisTableDataDetail',
  'netWorkLossDetail-query-NaturalGas': 'getNetLossAnalysisTableDataDetail',
  'calibrationRecord-modelDownload': 'downloadCaliRecord',
  'meterConcentratorManagement-modelDownload': 'meterConcentratorModelDownload',
  'meterConcentratorManagement-import': 'importMeterConcentratorModel',
  'energyUnitManagement-modelDownload': 'downloadIndustrialCmmercialTemplate',
  'employeeManagement-modelDownload': 'downloadEmployeeUnitTemplate',
  'lateFeePayment-query-residentHeating': 'getLateFeeHeatingTableData',
  'lateFeePayment-query-industry': 'getLateFeeIndustryTableDataAndBatchPay',
  'lateFeePayment-query-resident': 'getLateFeeResidentTableData',
  'lateFeePaymentBatch-query-residentHeating': 'getBatchRecPayTableData',
  'lateFeePaymentBatch-query-industry': 'getLateFeeIndustryTableDataAndBatchPay',
  'lateFeePaymentBatch-query-resident': 'getBatchResidentTableData',
  'systemImgManagement-query': 'getTopImgList',
  'userInformationManagement-modelDownload': 'downloadUserMsgManageTemplate',
  'residentialManagement-modelDownload': 'downloadRecidentMsgManageTemplate',
  'totalMeter-modelDownload': 'downloadTotalMeterTemplate',
  'totalMeter-import': 'importTotalMeterList',
  'waterUsageAccountManagement01-modelDownload': 'downloadUserWaterCountTemplate',
  'residentialHeating-modelDownload': 'downloadHeatingRecidentManageTemplate',
  'residentialMeterReading-modelDownload': 'downloadRecidentTemplate',
  'residentialMeterReading-import': 'importResidentMeterReadingList',
  'industrialMeterReading-modelDownload': 'downloadIndustrTemplate',
  'industrialMeterReading-import': 'importIndustrialMeterReadingList',
  'meterConcentratorManagement-query': 'getMeterConcentratorSearch',
  'meterConcentratorTaskManagement-query': 'getMSConcentratorSearch',
  'masterAddressManagement-query': 'searchSmartMeterList',
  'yearIndustrialEnergyRecoveryStatistics-query': 'industrialRecyclingYearQuery',
  'halfYearIndustrialEnergyRecoveryStatistics-query': 'industrialRecyclingHalfYearQuery',
  'quarterlyIndustrialEnergyRecoveryStatistics-query': 'industrialRecyclingQuartrtQuery',
  'changeMeterManagement-query': 'getAllChangeMeterRecord',
  'intelligentMeterManagement-export': 'exportIndustrialMeterReading',
  'chargePolicyManagement-query': 'searchPaidPilicy',
  'smartMeterAccount-query': 'searchSmartMeterAccount',
  'industrialEnergyRevenue-import': 'importIndustrialEnergyRevenueList',
  'industrialEnergyRevenue-modelDownload': 'downloadIndustrialEnergyRevenueModel',
  'unitTable-query': 'getIndustrialMeterTreeList',
  'extraNetData-import': 'importExtraNetData',
  'extraNetData-modelDownload': 'downloadExtraDataModel',
  'extraNetData-query': 'searchExtraNetData',
  'copyIndustrialMeterReading-query':'getIndustrialMeterReadingList',
  'copyIndustrialMeterReading-modelDownload': 'downloadIndustrTemplate',
  'copyIndustrialMeterReading-import': 'importIndustrialMeterReadingList',
  'copyIndustrialMeterReading-export': 'exportIndustrialMeterReading',
};

export default function getButtonList(keyArr) {
  let result = [];
  if (Object.prototype.toString.call(keyArr) === '[object Array]' && keyArr.length !== 0) {
    for (let i = 0, l = keyArr.length; i < l; i++) {
      if (JSON.stringify(keyArr[i]) === '{}' || keyArr[i].key === 'line') {
        result.push(keyArr[i]);
        continue;
      }
      let objKey = keyArr[i],
        key = objKey['key'],
        value = objKey['value'],
        ownLabel = objKey['ownLabel'],
        defaultValue = objKey['defaultValue'],
        disabled = objKey['disabled'],
        hasSlot = objKey['hasSlot'],
        queryMethod = objKey['queryMethod'];
      let arr = buttonList[key];
      let index = arr.findIndex(item => item.key === value);
      if (index !== -1) {
        let obj = JSON.parse(JSON.stringify(arr[index]));
        if (ownLabel) {
          obj.label = ownLabel
        }
        if (defaultValue !== undefined) {
          obj['defaultValue'] = defaultValue
        }
        if (disabled) {
          obj['disabled'] = disabled
        }
        if (hasSlot) {
          obj['hasSlot'] = hasSlot
        }
        if (queryMethod) {
          obj['queryMethod'] = queryMethod;
        }
        result.push(obj)
      }
    }
  }
  return result
}

export function getQueryMethod(key) {
  return queryMethod[key]
}
