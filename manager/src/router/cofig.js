import dynamic from 'dva/dynamic';
const Add = dynamic({
    component: () => import('../views/Main/Exam/add/index'),
});
const Classify = dynamic({
    component: () => import('../views/Main/Exam/classify/index'),
});
const Test = dynamic({
    component: () => import('../views/Main/Exam/test/index'),
});
const Detail = dynamic({
    component: () => import('../views/Main/Exam/detail/index'),
});
//----------------------------------------------------------------
const Adduser = dynamic({
    component: () => import("../views/Main/User/addUser/index"),
});
const Show = dynamic({
    component: () => import('../views/Main/User/show/index'),
});
//------------------------------------------------------------------
const ClassManage = dynamic({
    component: () => import('../views/Main/Class/classManage/index'),
});
const Teammanage = dynamic({
    component: () => import('../views/Main/Class/teammanage/index'),
});
const Student = dynamic({
    component: () => import('../views/Main/Class/student/index'),
});
//------------------------------------------------------------------
const Markinglists = dynamic({
    component: () => import('../views/Main/Marking/lists/index'),
});
const ExamDetail = dynamic({
    component: () => import('../views/Main/Marking/ExamDetail/index'),
});
const MarkingAdd = dynamic({
    component: () => import('../views/Main/Marking/add/index'),
});
const Adddetil = dynamic({
    component: () => import('../views/Main/Marking/Adddetil/index'),
});
//------------------------------------------------------------------
const ClassList = dynamic({
    component: () => import('../views/Main/Paper/classlist/index'),
});
const ClassMate = dynamic({
    component: () => import('../views/Main/Paper/classmate/index'),
});
const ClassDetail = dynamic({
    component: () => import('../views/Main/Paper/detail/index'),
});
export default {
    routes:[
        {
            name:"router.exam",
            child:[
                {
                    name:"router.exam.add", //添加试题
                    path:"/exam/add", 
                    id:"main-addQuestions",
                    component:Add,
                },
                {
                    name:"router.exam.classify",  //试题分类
                    path:"/exam/classify",
                    id:"main-questionsType",
                    component:Classify,
                },
                {
                    name:"router.exam.test",  //查看试题
                    path:"/exam/test",
                    id:"main-watchQuestions",
                    component:Test,
                },  //
                {
                    name:null, //试题详情
                    path:"/exam/detail",
                    id:"main-questionsDetail",
                    component:Detail,
                },
            ]
        },
        {
            name:"router.user", //用户管理
            child:[
                {
                    name:"router.user.adduser", //添加用户
                    path:"/user/adduser", 
                    id:"main-addUser",
                    component:Adduser,
                },
                {
                    name:"router.user.show",  //用户管理
                    path:"/user/show",
                    id:"main-showUser",
                    component:Show,
                },
            ]
        },
        {//
            name:"router.marking", //考试管理
            child:[
                {
                    name:"router.marking.add", //添加考试
                    path:"/marking/add", 
                    id:"main-addExam",
                    component:MarkingAdd,
                },
                {
                    name:"router.marking.lists",  //考试列表
                    path:"/marking/lists",
                    id:"main-examList",
                    component:Markinglists,
                },
                {
                    name:null,  //考试详情
                    path:"/exam/ExamDetail",
                    id:"main-examDetail",
                    component:ExamDetail,
                },
                 {//main-examEdit
                    name:null, //创建试卷
                    path:"/marking/Adddetil",
                    id:"main-examEdit",
                    component:Adddetil,
                },
            ]
        },
        {
            name:"router.class", //班级管理
            child:[
                {
                    name:"router.class.classmanage", //班级管理
                    path:"/class/classmanage", 
                    id:"main-grade",
                    component:ClassManage,
                },
                {
                    name:"router.class.teammanage",  //教室管理
                    path:"/class/teammanage",
                    id:"main-room",
                    component:Teammanage,
                },
                {
                    name:"router.class.student",  //学生管理
                    path:"/class/student",
                    id:"main-student",
                    component:Student,
                },
            ]
        },
        {
            name:"router.paper", //阅卷管理
            child:[
                {
                    name:"router.paper.makers", //待批班级
                    path:"/paper/classlist", 
                    id:"main-examPaperClassList",
                    component:ClassList,
                },
                {
                    name:null,  //批卷
                    path:"/paper/classmate",
                    id:"main-examPaperClassList",
                    component:ClassMate,
                },
                {
                    name:null,  //阅卷
                    path:"/marking/lists",
                    id:"main-examinationPapers",
                    component:ClassDetail,
                },
            ]
        },
    ]
}

