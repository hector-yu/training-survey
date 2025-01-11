const generalQuestions = [
    {
      question: "您认为当前的培训体系是否满足您的职业发展需求？",
      options: ["非常满意", "比较满意", "一般", "不满意", "非常不满意"]
    },
    {
      question: "您是否愿意参与内部或外部的提升培训？",
      options: ["愿意", "不确定", "不愿意"]
    }
  ];
  
  const positionQuestions = {
    "基层员工": [
      {
        question: "以下哪项技能您最需要提升？",
        options: ["销售技巧", "技术操作", "时间管理", "沟通能力"]
      },
      {
        question: "您是否需要针对工作痛点提供专项培训？",
        options: ["需要", "不需要"]
      },
      {
        question: "您希望通过培训解决哪些问题？",
        options: ["效率提升", "技能不足", "其他"]
      }
    ],
    "中层管理人员": [
      {
        question: "团队管理是您的当前重点需求吗？",
        options: ["是", "否"]
      },
      {
        question: "是否需要学习数据驱动的决策方法？",
        options: ["需要", "不需要"]
      },
      {
        question: "您对跨部门协作的主要困难有哪些？",
        options: ["沟通障碍", "资源不足", "其他"]
      }
    ],
    "高层管理人员": [
      {
        question: "您认为战略规划培训对当前工作是否重要？",
        options: ["非常重要", "重要", "一般", "不重要"]
      },
      {
        question: "是否需要针对变革管理进行能力提升？",
        options: ["需要", "不需要"]
      },
      {
        question: "您如何看待提升组织文化塑造能力的重要性？",
        options: ["非常重要", "重要", "一般", "不重要"]
      }
    ]
  };
  
  const departmentQuestions = {
    "销售/市场": [
      {
        question: "您是否需要提高市场洞察能力？",
        options: ["是", "否"]
      },
      {
        question: "销售流程优化是否是重点培训内容？",
        options: ["是", "否"]
      }
    ],
    "技术/研发": [
      {
        question: "技术创新是否是当前的关键培训内容？",
        options: ["是", "否"]
      },
      {
        question: "您是否需要进一步提升项目管理能力？",
        options: ["是", "否"]
      }
    ],
    // 其他部门的问题按需添加
  };
  
  const positionSelect = document.getElementById("position");
  const departmentSelect = document.getElementById("department");
  const dynamicQuestionsDiv = document.getElementById("dynamic-questions");
  
  function generateQuestions() {
    const position = positionSelect.value;
    const department = departmentSelect.value;
  
    if (!position || !department) return;
  
    dynamicQuestionsDiv.innerHTML = "";
  
    // 通用问题
    generalQuestions.forEach((q, index) => addQuestion(index + 1, q));
  
    // 岗位问题
    positionQuestions[position].forEach((q, index) =>
      addQuestion(generalQuestions.length + index + 1, q)
    );
  
    // 部门问题
    departmentQuestions[department].forEach((q, index) =>
      addQuestion(
        generalQuestions.length + positionQuestions[position].length + index + 1,
        q
      )
    );
  }
  
  function addQuestion(index, questionObj) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-group";
  
    const label = document.createElement("label");
    label.textContent = `${index}. ${questionObj.question}`;
    wrapper.appendChild(label);
  
    questionObj.options.forEach((option) => {
      const optionWrapper = document.createElement("div");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question_${index}`;
      input.value = option;
      const text = document.createTextNode(option);
  
      optionWrapper.appendChild(input);
      optionWrapper.appendChild(text);
      wrapper.appendChild(optionWrapper);
    });
  
    dynamicQuestionsDiv.appendChild(wrapper);
  }
  
  positionSelect.addEventListener("change", generateQuestions);
  departmentSelect.addEventListener("change", generateQuestions);
  
  document.getElementById("survey-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    alert("问卷已成功提交！");
  });
  