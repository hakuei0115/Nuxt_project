<script setup>
const router = useRouter();

const { $swal } = useNuxtApp();

// 表單格式
const userLoginObject = ref({
  email: "",
  password: "",
});

const loginAccount = async (userLoginObject) => {
  const { data, error } = await useFetch(
    "https://nuxr3.zeabur.app/api/v1/user/login",
    {
      method: "POST",
      body: userLoginObject,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (error.value) {
    console.log(error.value);
    $swal.fire({
      position: "center",
      icon: "error",
      title: "登入失敗",
      text: error.value.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  if (data.value) {
    $swal.fire({
      position: "center",
      icon: "success",
      title: "登入成功",
      text: "歡迎回來",
      showConfirmButton: false,
      timer: 1500,
    });

    const auth = useCookie("auth", { maxAge:600 })
    auth.value = data.value.token;

    router.push("/Day15/order");
  }
}
</script>

<template>
  <div class="py-3 py-md-5 vh-100">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="h3 mb-4">登入</h2>
          <form @submit.prevent="loginAccount(userLoginObject)">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="example@gmail.com"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                v-model="userLoginObject.email"
                required
              />
              <label for="email">信箱 <span class="text-danger">*</span></label>
            </div>

            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="請輸入 8 碼以上密碼"
                pattern=".{8,}"
                v-model="userLoginObject.password"
                required
              />
              <label for="password"
                >密碼 <span class="text-danger">*</span></label
              >
            </div>
            <button class="btn btn-lg btn-primary w-100" type="submit">
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>