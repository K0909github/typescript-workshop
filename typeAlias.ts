type Staff = {
  firstName: string;
  lastName: string;
};

const staff: Staff = { firstName: "AWS", lastName: "太郎" };
const boss: Staff = { firstName: "Amazon", lastName: "次郎" };

console.log(`${staff.firstName} ${staff.lastName} の上司は ${boss.firstName} ${boss.lastName} です。`);