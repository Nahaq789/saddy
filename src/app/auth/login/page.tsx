'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthInput from '@/components/auth/input';

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-5">
			<div className="w-full max-w-md">
				<div className="flex flex-col items-center mb-6">
					<div className="w-28 h-28 mb-2">
						<Image
							src="/logo/app_logo.png"
							alt="App Logo"
							width={128}
							height={128}
							className="object-cover"
							priority
						/>
					</div>
					<h1 className="text-2xl font-bold font-mono italic">
						Saddy
					</h1>
				</div>

				<div className="mb-8">
					<h2 className="app-heading-large text-left">
						Welcome back
					</h2>
					<p className="app-text-accent text-left mt-1">
						Login to access your account below.
					</p>
				</div>

				<form className="space-y-4">
					<div>
						<label htmlFor="email" className="app-label">
							Email Address
						</label>
						<AuthInput
							type="email"
							label='Email Address'
							value="Enter your email..."
							onChange={(e) => e.target.value}
							isPassword={false}
							placeholder="Enter your email..."
							className="app-input"
						/>
					</div>

					<div>
						<label htmlFor="password" className="app-label">
							Password
						</label>
						<div className="relative">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password..."
								className="app-input"
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 flex items-center pr-3"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-app-text-secondary" viewBox="0 0 20 20" fill="currentColor">
										<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
										<path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
									</svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-app-text-secondary" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
										<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
									</svg>
								)}
							</button>
						</div>
					</div>

					<div className="flex items-center justify-between mt-6">
						<Link
							href="/auth/forgot-password"
							className="app-link"
						>
							Forgot Password?
						</Link>

						<button
							type="submit"
							className="app-btn-primary"
						>
							Login
						</button>
					</div>
				</form>

				<div className="mt-6 text-center">
					<span>Don't have an account? </span>
					<Link
						href="/auth/register"
						className="app-link inline-flex items-center"
					>
						Create →
					</Link>
				</div>
			</div>
		</div>
	);
}
