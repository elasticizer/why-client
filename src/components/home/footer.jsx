import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer className="w-full bg-orange-400 dark:bg-neutral-950">
				{/* <!-- ========== FOOTER ========== --> */}
				<footer className="mt-auto w-full dark:bg-neutral-950 max-w-[75rem] mx-auto">
					<div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
						{/* <!-- Grid --> */}
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
							<div className="col-span-full lg:col-span-2 flex justify-center items-center">
								<a
									className="flex-none text-xl font-semibold text-white"
									href="#">
									<Image
										src="/image/why_logo-white.png"
										width={300}
										height={100}
									/>
								</a>
							</div>
							{/* <!-- End Col --> */}

							<div className="col-span-1">
								<h4 className="font-semibold text-gray-100">關於我們</h4>

								<div className="mt-3 grid space-y-3">
									<a
										className="inline-flex gap-x-2 text-white hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
										href="#">
										最新消息
									</a>
									<Link href="/faq">
										<div
											className="inline-flex gap-x-2 text-white hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
											href="#">
											常見問題
										</div>
									</Link>
									<a
										className="inline-flex gap-x-2 text-white hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
										href="#">
										服務契約
									</a>
									<a
										className="inline-flex gap-x-2 text-white hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
										href="#">
										隱私權政策
									</a>
								</div>
							</div>
							{/* <!-- End Col --> */}

							<div class="col-span-2">
								<h4 class="font-semibold text-gray-100 mb-3">聯絡我們</h4>

								<form
									id="contact-form"
									className="bg-white rounded-lg">
									<div className="p-2">
										<textarea
											className="w-full py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
											placeholder="輸入您的訊息"></textarea>
									</div>
									<div class="flex items-center gap-2 sm:flex-row sm:gap-3  p-2">
										<div class="w-full">
											<input
												type="email"
												id="hero-input"
												name="hero-input"
												class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
												placeholder="輸入您的信箱"
											/>
										</div>
										<button
											class="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-400	 text-white hover:bg-sky-600 disabled:opacity-50 disabled:pointer-events-none"
											type="submit">
											送出
										</button>
									</div>
								</form>
							</div>
							{/* <!-- End Col --> */}
						</div>
						{/* <!-- End Grid --> */}

						<div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
							<div className="flex justify-between items-center">
								<p className="text-sm text-white dark:text-neutral-400">
									© 2024 WhySchool. All rights reserved.
								</p>
							</div>
							{/* <!-- End Col --> */}

							{/* <!-- Social Brands --> */}
							<div>
								<a
									className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
									href="#">
									<svg
										className="flex-shrink-0 size-4"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16">
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
									</svg>
								</a>
								<a
									className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
									href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-youtube"
										viewBox="0 0 16 16">
										<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
									</svg>
								</a>
								<a
									className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
									href="#">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-instagram"
										viewBox="0 0 16 16">
										<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
									</svg>
								</a>
							</div>
							{/* <!-- End Social Brands --> */}
						</div>
					</div>
				</footer>
				{/* <!-- ========== END FOOTER ========== --> */}
			</footer>
		</>
	);
}
