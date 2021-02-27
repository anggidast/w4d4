/**
 * =============
 * Company Match
 * =============
 *
 *
 * Company match adalah sebuah fungsi yang akan mencocokan requirement dari sebuah perusahaan dengan skill yang dimiliki oleh seseorang.
 *
 * fungsi ini akan menerima dua parameter yang berupa sebuah object.
 *
 * Parameter pertama adalah sebuah object perusahaan dengan beberapa data seperti: nama perusahaan, job yang ditawarkan, dan requirement yang dibutuhkan untuk memdapatkan pekerjaan
 * Parameter kedua adalah sebuah object pelamar dengan beberapa data seperti: nama pelamar, skill pelamar, dan job yang dinginkan oleh pelamar tersebut.
 *
 * Fungsi ini akan menghitung persentase berapa cocok perusahaan dan pelamar yang dikirimkan dengan beberapa syarat.
 * 1. Jika job yang ditawarkan oleh perusahaan tidak sesuai dengan job yang diinginkan maka persentase mereka adalah 0%
 * 2. Jika seluruh requirement yang diminta oleh perusahaan dipenuhi oleh pelamar maka persentase mereka adalah 100%.
 * 3. Jika ada beberapa requirement yang tidak dipenuhi pelamar maka persentase akan dihitung dengan rumus [ jumlah requirement yang dipenuhi] / [ requirement yang diminta]
 *    contoh: Terdapat 3 requirement pada perusahan tetapi pelamar hanya memenuhi 2 requirement oleh karena itu persentase pelamar tersebut adalah 66% ( dibulatkan ke bawah)
 *
 * Jika seseorang mendapatkan persentase diatas 60% maka tampilkanlah pesan `Selamat [nama pelamar] anda cocok dengan perusahaan [ nama perusahaan] dengan persentase kecocokan [ persentas]
 * Jika tidak maka tampilkan pesan `Mohon maaf [nama pelamar] anda belum cocok dengan perusaahan [nama perusaahn] anda hanya mendapatkan persentase kecocokan [ persentase]
 */

function companyMatch(company, user) {
  // Insert your code here
  let matchJob = 0;
  let counter1 = 0;
  let counter2 = 0;
  for (const key1 in company) {
    for (const key2 in user) {
      if (company[key1] == user[key2]) {
        matchJob++;
      }
      if (matchJob == 1 && typeof(company[key1]) == 'object' && typeof(user[key2]) == 'object') {
        for (let i = 0; i < company[key1].length; i++) {
          counter2 = company[key1].length;
          if (company[key1][i] == user[key2][i]) {
            counter1++;
          }
        }
      }
    }
  }
  if (matchJob == 1) {
    counter1 = (counter1 / counter2) * 100;
  } else {
    counter1 = 0;
  }
  if (counter1 > 60) {
    return `Selamat ${user.name} anda cocok dengan perusahaan ${company.name} dengan persentase kecocokan ${Math.floor(counter1)}%`
  }
  return `Mohon maaf ${user.name} anda belum cocok dengan perusaahan ${company.name} anda hanya mendapatkan persentase kecocokan ${Math.floor(counter1)}%`
}


const company1 = {
  name: 'Pesbok',
  job: 'Frontend Developer',
  requirement: ['HTML', 'CSS', 'JS']
}

const john = {
  name: 'John',
  applyAs: 'Frontend Developer',
  skills: ['HTML', 'CSS', 'JS']
}

const kosasih = {
  name: 'Kosasih',
  applyAs: 'Backend Developer',
  skills: ['Express', 'Node', 'PHP']
}

const marry = {
  name: 'Marry',
  applyAs: 'Frontend Developer',
  skills: ['HTML', 'CSS']
}

console.log(companyMatch(company1, john)) // Selamat John anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 100%
console.log(companyMatch(company1, kosasih)) // Mohon maaf Kosasih anda belum cocok dengan perusaahan Pesbok anda hanya mendapatkan persentase kecocokan 0%
console.log(companyMatch(company1, marry)) // Selamat Marry anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 66% 